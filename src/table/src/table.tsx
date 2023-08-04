/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref, toRefs, provide } from 'vue'
import { TableProps, tableProps } from './table-type'
import { ColumnContext } from './table-column-type'
import '../../index.scss'
import '../style/table.scss'

export default defineComponent({
  name: 'STable',
  props: tableProps,
  setup(props: TableProps, { slots }) {
    const { data } = toRefs(props)
    // 获取 Column 数组中的列数据
    const columnData = ref([])
    provide('column-data', columnData)
    return () => (
      <table class="s-table">
        <thead>
          <tr>{slots.default?.()}</tr>
        </thead>
        <tbody>
          {data.value.map((row: any) => (
            <tr>
              {columnData.value.map((column: ColumnContext, index: number) => {
                // 如果存在默认插槽，则优先渲染
                const columnSlots = slots.default?.()[index]
                if (columnSlots?.children) {
                  return (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    <td>{(columnSlots?.children as any).default?.(row)}</td>
                  )
                }
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                return <td>{column.prop ? row[column.prop!] : ''}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
})
