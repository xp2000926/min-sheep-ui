import { defineComponent, toRefs, h } from 'vue';
import { FlexProps, flexProps } from './flex-type';
import classnames from 'classnames';

export default defineComponent({
  name: 'SFlex',
  props: flexProps,
  setup(props: FlexProps, { slots }) {
    const { vertical, justify, wrap, align, gap, component } = toRefs(props);
    return () =>
      component.value == 'div' ? (
        <div
          class={classnames('s-flex', {
            's-flex-vertical': vertical.value
          })}
          style={{
            'justify-content': justify.value,
            'flex-flow': wrap.value,
            'align-items': align.value,
            gap: gap.value
          }}
        >
          {slots.default?.()}
        </div>
      ) : (
        h(
          component.value,
          {
            class: classnames('s-flex', {
              's-flex-vertical': vertical.value
            }),
            style: {
              'justify-content': justify.value,
              'flex-flow': wrap.value,
              'align-items': align.value,
              gap: gap.value
            }
          },
          slots.default?.()
        )
      );
  }
});
