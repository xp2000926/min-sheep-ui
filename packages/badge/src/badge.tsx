import { defineComponent, toRefs, computed } from 'vue';
import { BadgeProps, badgeProps } from './badge-type';
import classnames from 'classnames';

export default defineComponent({
  name: 'SBadge',
  props: badgeProps,
  setup(props: BadgeProps, { slots }) {
    const {
      value,
      max,
      isDot,
      type,
      color,
      independent,
      isStatus,
      text,
      textColor
    } = toRefs(props);
    const className = computed(() => ({
      's-badge--content': true,
      'is-fixed': !independent.value,
      'is-dot': isDot.value,
      [`s-badge--${type.value}`]:
        type.value == '' || type.value == 'default' ? false : true,
      's-badge-color': color.value !== '',
      'is-status': isStatus.value
    }));
    return () => (
      <div
        class={classnames('s-badge', {
          'mr-6': isStatus.value
        })}
      >
        {slots.default ? slots.default?.() : null}
        <sup
          class={className.value}
          style={{
            '--badge-color': color.value,
            '--text-color': textColor.value
          }}
        >
          {slots.content
            ? slots.content?.({ value: value.value })
            : Number(value.value) == 0
              ? ''
              : isDot.value
                ? ''
                : max.value == 0
                  ? `${value.value}`
                  : Number(value.value) > max.value
                    ? `${max.value}+`
                    : value.value}
        </sup>
        {isStatus.value && text.value != '' && (
          <div class="s-badge-status-text">{text.value}</div>
        )}
      </div>
    );
  }
});
