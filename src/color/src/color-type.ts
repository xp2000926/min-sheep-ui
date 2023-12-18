import { ExtractPropTypes } from 'vue'

export const colorProps = {} as const
export type ColorProps = ExtractPropTypes<typeof colorProps>
