import { ExtractPropTypes } from 'vue'

export const tableColumnProps = {
    prop: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
} as const
export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
export interface ColumnContext {
    prop?: string
    title?: string
}