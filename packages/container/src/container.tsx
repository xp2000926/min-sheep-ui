import { defineComponent } from 'vue';
import { ContainerProps, containerProps } from './container-type';
import classnames from 'classnames';

export default defineComponent({
  name: 'SContainer',
  props: containerProps,
  setup(props: ContainerProps, { slots }) {
    return () => (
      <section
        class={classnames('s-container', {
          'is-vertical':
            slots.default?.().filter(it => it.type.name == 'SAside').length ===
            0
        })}
      >
        {slots.default?.()}
      </section>
    );
  }
});
