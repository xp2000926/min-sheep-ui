import { Value } from 'async-validator'
import { ExtractPropTypes } from 'vue'
import { LabelAlign, LabelSize, Layout } from './form-type'
export type LabelData = {
  layout: Layout
  labelSize: LabelSize
  labelAlign: LabelAlign
}
export type FormItemContext = {
  validate: () => Promise<Value>
}
export const formItemProps = {
  label: {
    type: String
  },
  prop: {
    type: String
  },
  error: {
    type: String,
    default: ''
  }
} as const
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
