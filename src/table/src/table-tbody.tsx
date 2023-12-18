import { defineComponent, toRefs } from 'vue'
import { tableTbodyProps, TableTbodyProps } from './table-tbody-type'
import classNames from 'classnames'
import { ColumnContext } from './table-column-type'
export default defineComponent({
  name: 'STableTbody',
  props: tableTbodyProps,
  setup(props: TableTbodyProps, slots) {
    const { data, columnData, stripe } = toRefs(props)
    console.log('props', data.value, columnData.value, stripe.value)
    return () =>
      data.value.length > 0 ? (
        data.value.map((row: any, index: number) => (
          <tr
            class={classNames({
              's-table__row--striped': index % 2 == 1 && stripe.value
            })}
          >
            {columnData.value.map((column: ColumnContext, index: number) => {
              // 如果存在默认插槽，则优先渲染
              const columnSlots = slots.default?.()[index]
              if (columnSlots?.children) {
                return <td>{(columnSlots?.children as any).default?.(row)}</td>
              }
              return (
                <td>
                  {column.prop ? (
                    row[column.prop!]
                  ) : column.type === 'selection' ? (
                    <input type="checkbox" v-model={row.checked} />
                  ) : (
                    ''
                  )}
                </td>
              )
            })}
          </tr>
        ))
      ) : (
        <tr class="s-table-placeholder">
          <td colspan={3}>
            <div class="ant-empty-description">
              {slots.empty ? slots.empty() : '暂无数据'}
            </div>
          </td>
        </tr>
      )
  }
})
