import { ExtractPropTypes } from 'vue'

export const baseModalProps = {
  modelValue: {
    type: Boolean,
    default: false
  }
} as const
export type BaseModalProps = ExtractPropTypes<typeof baseModalProps>
