import { defineComponent, ref, toRefs } from 'vue';
import { PopoverProps, popoverProps } from './popover-type';
import { BasePopover } from '../../base-popover';

export default defineComponent({
  name: 'SPopover',
  props: popoverProps,
  emits: ['update:modelValue'],
  setup(props: PopoverProps, { slots }) {
    // 获取属性中关键值
    const { modelValue, title } = toRefs(props);
    return () => (
      <>
        {modelValue.value && (
          <BasePopover class="s-popover" {...props}>
            <h4 class="s-popover__title">{title.value}</h4>
            {slots.default?.()}
          </BasePopover>
        )}
      </>
    );
  }
});
// https://appwhrkrsz84443.h5.xiaoeknow.com/p/course/video/v_63550dc9e4b050af23c91d26?product_id=p_62a44620e4b01c509abcbcda
