import { defineComponent, toRefs, inject, computed, ComputedRef } from 'vue';
import { FormItemProps, formItemProps, LabelData } from './form-item-type';
import '../../index.scss';
import '../style/form-item.scss';

export default defineComponent({
  name: 'SFormItem',
  props: formItemProps,
  setup(props: FormItemProps, { slots }) {
    const { label } = toRefs(props);
    // 注入label_data，然后生成动态样式
    const labelData = inject('LABEL_DATA') as ComputedRef<LabelData>;
    console.log(labelData.value.inline);

    const ItemClass = computed(() => ({
      's-form-item': true,
      's-form-item--horizontal': !labelData.value.inline,
      's-form-item--vertical': labelData.value.inline
    }));
    //size 和 labelPosition;
    const labelClassSize = computed(() => ({
      's-form-item__label': true,
      's-form-item__label--vertical': labelData.value.inline,
      [`s-form-item__label--${labelData.value.size}`]: !labelData.value.inline,
      [`s-form-item__label--${labelData.value.labelPosition}`]:
        !labelData.value.inline
    }));
    return () => {
      return (
        <div class={ItemClass.value}>
          {/* label */}
          <span class={labelClassSize.value}>{label.value}</span>
          {/* control */}
          <div>{slots.default?.()}</div>
        </div>
      );
    };
  }
});
