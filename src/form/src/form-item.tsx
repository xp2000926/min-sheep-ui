import { computed, ComputedRef, defineComponent, inject } from 'vue'
import { FormItemProps, formItemProps, LabelData } from './form-item-type'
import '../../index.scss'
import '../style/form-item.scss'

export default defineComponent({
  name: 'SFormItem',
  props: formItemProps,
  setup(props: FormItemProps, { slots }) {
    // 注入label_data，然后生成动态样式
    const labelData = inject('LABEL_DATA') as ComputedRef<LabelData>
    const ItemClass = computed(() => ({
      's-form__item': true,
      's-form__item--horizontal': labelData.value.layout === 'horizontal',
      's-form__item--vertical': labelData.value.layout === 'vertical'
    }))
    return () => (
      // s-from__item s-form__item--horizontal |s-form__item--vertical
      <div class={ItemClass.value}>
        {/* label */}
        <span class="s-form__label">{props.label}</span>
        {/* control */}
        <div>{slots.default?.()}</div>
      </div>
    )
  }
})
