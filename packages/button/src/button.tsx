import { computed, defineComponent, toRefs, h, unref } from 'vue';
import { buttonProps, ButtonProps } from './button-type';
import { useNamespace } from '@min-sheep-ui/hooks';

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const {
      type,
      size,
      disabled,
      block,
      plain,
      round,
      circle,
      dashed,
      tag,
      color
      // bg,
      // text,
      // link
    } = toRefs(props);
    const ns = useNamespace('button');

    const className = computed(() =>
      [
        // 基础类名
        ns.b(),
        // 类型修饰符
        ns.m(type.value !== '' && type.value !== 'default' ? type.value : ''),
        // 尺寸修饰符
        ns.m(size.value !== '' && size.value !== 'default' ? size.value : ''),
        // 状态类名
        ns.is('plain', plain.value),
        ns.is('round', round.value),
        ns.is('circle', circle.value),
        ns.is('block', block.value),
        ns.is('dashed', dashed.value),
        ns.is('disabled', disabled.value && tag.value !== 'button'),
        ns.is('color', color.value !== '')
        // 'is-bg': bg.value,
        // 'is-text': text.value,
        // 'is-link': link.value,
      ].filter(Boolean)
    );
    // console.log('className', className.value);
    return () => {
      return tag.value == 'button' ? (
        <button
          disabled={unref(disabled)}
          class={unref(className)}
          style={color.value ? `--color:${color.value}` : {}}
        >
          {slots.default ? <span>{slots.default()}</span> : null}
        </button>
      ) : (
        h(
          tag.value,
          {
            class: unref(className),
            style: color.value ? `--color:${color.value}` : {}
          },
          slots.default ? <span>{slots.default()}</span> : undefined
        )
      );
    };
  }
});
