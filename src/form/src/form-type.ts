import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { Rules } from 'async-validator'
import { FormItemContext } from './form-item-type'
export type Layout = 'horizontal' | 'vertical'
export type LabelSize = 'sm' | 'md' | 'lg'
export type LabelAlign = 'start' | 'center' | 'end'
export type FormContext = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: any
  rules?: Rules
  addItem: (item: FormItemContext) => void
  removeItem: (item: FormItemContext) => void
}
export const formContextToken: InjectionKey<FormContext> =
  Symbol('formContextToken')
export const formProps = {
  model: {
    type: Object,
    required: true
  },
  layout: {
    type: String as PropType<Layout>,
    default: 'horizontal'
  },
  labelSize: {
    type: String as PropType<LabelSize>,
    default: 'md'
  },
  labelAlign: {
    type: String as PropType<LabelAlign>,
    default: 'start'
  },
  rules: {
    type: Object as PropType<Rules>
  }
} as const
export type FormProps = ExtractPropTypes<typeof formProps>
