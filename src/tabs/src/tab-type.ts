import { ExtractPropTypes } from 'vue'

export const tabProps = {
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
} as const
export type TabProps = ExtractPropTypes<typeof tabProps>
