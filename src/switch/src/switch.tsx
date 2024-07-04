import { defineComponent, toRefs } from 'vue';
import { SwitchProps, switchProps } from './switch-type';
import classNames from 'classnames';
export default defineComponent({
  name: 'SSwitch',
  props: switchProps,
  emits: ['update:modelValue'],
  setup(props: SwitchProps, { slots }) {
    const {
      modelValue,
      disabled,
      size,
      activeText,
      inactiveText,
      inlinePrompt
    } = toRefs(props);
    const sizeClass = size.value == '' ? '' : `s-switch--${size.value}`;
    return () => (
      <div
        class={classNames(
          `s-switch inline-flex leading-5 vertical-middle items-center relative ${sizeClass}`,
          {
            'is-checked': modelValue.value,
            'is-disabled': disabled.value
          }
        )}
      >
        <input
          class="s-switch__input absolute"
          type="checkbox"
          v-model={modelValue.value}
        />
        <div
          class={classNames('s-switch__label s-switch__label--left ', {
            'is-active': !modelValue.value
          })}
        >
          <span>{inactiveText.value}</span>
        </div>
        <div class="s-switch__core inline-flex items-center relative cursor-pointer">
          {inlinePrompt.value ? (
            <div class="s-switch__inner">
              <span class="is-text"></span>
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
        <div
          class={classNames('s-switch__label s-switch__label--right', {
            'is-active': modelValue.value
          })}
        >
          <span>{activeText.value}</span>
        </div>
      </div>
    );
  }
});
