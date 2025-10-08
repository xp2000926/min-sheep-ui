import { defineComponent, toRefs } from 'vue';
import { LinkProps, linkProps } from './link-type';
import classnames from 'classnames';

export default defineComponent({
  name: 'SLink',
  props: linkProps,
  setup(props: LinkProps, { slots }) {
    const { type } = toRefs(props);
    return () => (
      <a
        class={classnames('s-link', {
          [`s-link--${type.value}`]:
            type.value == '' || type.value == 'default' ? false : true
        })}
      >
        <span class="s-link--inner">{slots.default?.()}</span>
      </a>
    );
  }
});
