import { ExtractPropTypes } from 'vue'

export const textProps = {} as const
export type TextProps = ExtractPropTypes<typeof textProps>
