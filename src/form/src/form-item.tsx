import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  provide,
  ref
} from 'vue'
import { FormItemProps, formItemProps, LabelData } from './form-item-type'
import '../../index.scss'
import '../style/form-item.scss'
import { formContextToken } from './form-type'
import Validator from 'async-validator'

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
    // 必须是水平方式排列下面两个属性生效
    // labelSize/labelAlign
    const labelClass = computed(() => ({
      's-form__label': true,
      's-form__label--vertical': labelData.value.layout === 'vertical',
      [`s-form__label--${labelData.value.labelAlign}`]:
        labelData.value.layout === 'horizontal',
      [`s-form__label--${labelData.value.labelSize}`]:
        labelData.value.layout === 'horizontal'
    }))
    // 实现一个validate方法并提供给下级
    // 做校验需要数据和校验规则,它们由form提供的
    const formCtx = inject(formContextToken)
    const showMessage = ref(false)
    const errorMessage = ref('')
    const validate = () => {
      if (!formCtx) {
        console.warn('请在Form中使用FormItem')
        return Promise.reject('请在Form中使用FormItem')
      }
      if (!props.prop) {
        console.warn('如果要校验当前项，请设置prop字段')
        return Promise.reject('如果要校验当前项，请设置prop字段')
      }
      // 不需要校验
      if (!formCtx.rules) {
        return Promise.resolve({ result: true })
      }
      const itemRules = formCtx.rules[props.prop] || undefined
      if (!itemRules) {
        return Promise.resolve({ result: true })
      }
      // 获取校验规则和数值
      const value = formCtx.model[props.prop]
      // 执行校验并返回结果
      // 创建一个校验实例
      const validator = new Validator({ [props.prop]: itemRules })
      return validator.validate({ [props.prop]: value }, errors => {
        if (errors) {
          // 校验失败，显示错误信息
          showMessage.value = true
          errorMessage.value = errors[0].message || '校验错误'
        } else {
          // 校验通过，清空错误信息
          showMessage.value = false
          errorMessage.value = ''
        }
      })
    }
    const formItemCtx = {
      validate
    }
    provide('FORM_ITEM_CTX', formItemCtx)
    // 挂载后注册到FormCtx中
    onMounted(() => {
      if (props.prop) {
        formCtx?.addItem(formItemCtx)
      }
    })
    onUnmounted(() => {
      if (props.prop) {
        formCtx?.removeItem(formItemCtx)
      }
    })
    return () => (
      // s-from__item s-form__item--horizontal |s-form__item--vertical
      <div class={ItemClass.value}>
        {/* label */}
        <span class={labelClass.value}>{props.label}</span>
        {/* control */}
        <div>{slots.default?.()}</div>
        {/* error message */}
        {showMessage.value && (
          <div class="error-message">{errorMessage.value}</div>
        )}
      </div>
    )
  }
})
