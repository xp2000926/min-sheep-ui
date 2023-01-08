import { Placement } from '@floating-ui/dom'
import { ExtractPropTypes, PropType } from 'vue'

export const basePopoverProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  host: {
    type: Object as PropType<HTMLElement>,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  }
} as const
export type BasePopoverProps = ExtractPropTypes<typeof basePopoverProps>
