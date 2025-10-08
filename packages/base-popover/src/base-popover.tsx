import { defineComponent, nextTick, ref, toRefs, watch } from 'vue';
import { BasePopoverProps, basePopoverProps } from './base-popover-type';
import { computePosition } from '@floating-ui/dom';

export default defineComponent({
  name: 'SBasePopover',
  props: basePopoverProps,
  emits: ['update:modelValue'],
  setup(props: BasePopoverProps, { slots, attrs }) {
    // 获取属性中关键值
    const { host: hostRef, modelValue } = toRefs(props);
    // 浮动元素
    const overlayRef = ref();

    // 计算定位
    const updatePosition = () => {
      computePosition(hostRef.value, overlayRef.value).then(({ x, y }) => {
        Object.assign(overlayRef.value.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      });
    };
    watch(
      modelValue,
      newVal => {
        // 当前newVal为true，即overlay需要显示时，需要重新更新位置
        if (newVal) {
          nextTick(updatePosition);
        }
      },
      {
        immediate: true
      }
    );
    return () => (
      <>
        {modelValue.value && (
          <div ref={overlayRef} class="s-base-popover" {...attrs}>
            {slots.default?.()}
          </div>
        )}
      </>
    );
  }
});
