import { defineComponent, toRefs } from 'vue';
import { SwitchProps, switchProps } from './switch-type';
import classNames from 'classnames';
export default defineComponent({
  name: 'SSwitch',
  props: switchProps,
  emits: ['update:modelValue'],
  setup(props: SwitchProps, { emit, slots }) {
    const {
      modelValue,
      disabled,
      size,
      activeText,
      inactiveText,
      inlinePrompt,
      width,
      round
    } = toRefs(props);
    const sizeClass = size.value == '' ? '' : `s-switch--${size.value}`;
    return () => (
      <div
        onClick={() => {
          emit('update:modelValue', !modelValue.value);
        }}
        class={classNames(
          `s-switch inline-flex leading-5 align-middle  items-center relative ${sizeClass}`,
          {
            'is-checked': modelValue.value,
            'is-disabled': disabled.value,
            'is-round': !round.value
          }
        )}
      >
        <input
          class="s-switch__input absolute"
          type="checkbox"
          v-model={modelValue.value}
        />
        {!inlinePrompt.value ? (
          <div
            class={classNames('s-switch__label s-switch__label--left ', {
              'is-active': !modelValue.value
            })}
          >
            <span>{inactiveText.value}</span>
          </div>
        ) : null}
        <div
          class="s-switch__core inline-flex items-center relative cursor-pointer"
          style={{
            width: width.value == 0 ? 'auto' : `${width.value}px`
          }}
        >
          {inlinePrompt.value ? (
            <div class="s-switch__inner">
              <span class="is-text">
                {modelValue.value ? activeText.value : inactiveText.value}
              </span>
            </div>
          ) : null}
          <div class="s-switch__action flex absolute items-center justify-center">
            {slots.activeAction && !modelValue.value
              ? slots.activeAction()
              : ''}
            {slots.inactiveAction && modelValue.value
              ? slots.inactiveAction()
              : ''}
          </div>
        </div>
        {!inlinePrompt.value ? (
          <div
            class={classNames('s-switch__label s-switch__label--right', {
              'is-active': modelValue.value
            })}
          >
            <span>{activeText.value}</span>
          </div>
        ) : null}
      </div>
    );
  }
});
