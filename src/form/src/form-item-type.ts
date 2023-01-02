import { ExtractPropTypes } from 'vue'
import { LabelAlign, LabelSize, Layout } from './form-type'
export type LabelData = {
  layout: Layout
  labelSize: LabelSize
  labelAlign: LabelAlign
}
export const formItemProps = {
  label: {
    type: String
  }
} as const
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
