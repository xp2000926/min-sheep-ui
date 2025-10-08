import { defineComponent, h, computed, inject, unref } from 'vue';
import type { CSSProperties } from 'vue';
import { ColProps, colProps } from './col-type';
import { rowContextKey } from './constants';
import { useNamespace } from '@min-sheep-ui/hooks';
import { isNumber, isObject } from '@min-sheep-ui/utils';

export default defineComponent({
  name: 'SCol',
  props: colProps,
  setup(props: ColProps, { slots }) {
    const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
    const style = computed(() => {
      const styles: CSSProperties = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });
    const ns = useNamespace('col');
    const colKls = computed(() => {
      const classes: string[] = [];
      const pos = ['span', 'offset', 'pull', 'push'] as const;

      pos.forEach(prop => {
        const size = props[prop];
        if (isNumber(size)) {
          if (prop === 'span') classes.push(ns.b(`${props[prop]}`));
          else if (size > 0) classes.push(ns.b(`${prop}-${props[prop]}`));
        }
      });

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
      sizes.forEach(size => {
        if (isNumber(props[size])) {
          classes.push(ns.b(`${size}-${props[size]}`));
        } else if (isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes.push(
              prop !== 'span'
                ? ns.b(`${size}-${prop}-${sizeProp}`)
                : ns.b(`${size}-${sizeProp}`)
            );
          });
        }
      });

      // this is for the fix
      if (gutter.value) {
        classes.push(ns.is('guttered'));
      }
      return [ns.b(), classes];
    });
    return () =>
      h(
        props.tag,
        {
          class: unref(colKls),
          style: unref(style)
        },
        slots.default?.()
      );
  }
});
