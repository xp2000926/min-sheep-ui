import { ExtractPropTypes } from 'vue'

export const colorProps = {
  color: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  theme: {
    type: String, //'dark'
    default: 'dark'
  }
} as const
export type ColorProps = ExtractPropTypes<typeof colorProps>
