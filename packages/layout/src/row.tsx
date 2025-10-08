import { computed, defineComponent, provide, h, unref } from 'vue';
import { RowProps, rowProps } from './row-type';
import { rowContextKey } from './constants';
import type { CSSProperties } from 'vue';
import { useNamespace } from '@min-sheep-ui/hooks';

export default defineComponent({
  name: 'SRow',
  props: rowProps,
  setup(props: RowProps, { slots }) {
    const gutter = computed(() => props.gutter);
    provide(rowContextKey, {
      gutter
    });
    const style = computed(() => {
      const styles: CSSProperties = {};
      if (!props.gutter) {
        return styles;
      }

      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
      return styles;
    });
    const ns = useNamespace('row');
    const rowKls = computed(() => [
      ns.b(),
      ns.is(`justify-${props.justify}`, props.justify !== 'start'),
      ns.is(`align-${props.align}`, !!props.align)
    ]);
    return () =>
      h(
        props.tag,
        {
          class: unref(rowKls),
          style: unref(style)
        },
        slots.default?.()
      );
  }
});
