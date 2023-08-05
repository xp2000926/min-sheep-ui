import { ExtractPropTypes } from 'vue'

export const baseSelectionBoxProps = {
  onClick: {
    type: Function,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  marginRight: {
    type: Number,
    default: 8
  }
} as const
export type BaseSelectionBoxProps = ExtractPropTypes<
  typeof baseSelectionBoxProps
>
