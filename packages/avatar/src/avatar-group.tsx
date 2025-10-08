import { defineComponent, toRefs } from 'vue';
import { avatarGroupProps, AvatarGroupProps } from './avatar-group-type';

export default defineComponent({
  name: 'SAvatarGroup',
  props: avatarGroupProps,
  setup(props: AvatarGroupProps, { slots }) {
    const { options, max } = toRefs(props);
    return () => (
      <div class="s-avatar-group">
        {max.value == 0
          ? options.value.map(item => slots.avatar?.({ options: item }))
          : options.value
              .slice(0, max.value - 1)
              .map(item => slots.avatar?.({ options: item }))}
        {max.value !== 0 &&
          slots.rest?.({
            rest: options.value.slice(max.value - 1).length,
            options: options.value.slice(max.value - 1)
          })}
      </div>
    );
  }
});
