import { defineComponent, ref, toRefs, provide, watch, computed } from 'vue'
import { TableProps, tableProps } from './table-type'
import { ColumnContext } from './table-column-type'
import STableColumn from './table-column'
import classNames from 'classnames'
import '../../index.scss'
import '../style/table.scss'

export default defineComponent({
  name: 'STable',
  props: tableProps,
  // 声明事件
  emits: ['selection-change'],
  setup(props: TableProps, { slots, emit }) {
    const {
      data,
      border,
      stripe,
      columns,
      showSummary,
      headerCellStyle,
      showHeader
    } = toRefs(props)
    // 获取 Column 数组中的列数据
    const columnData = ref([])
    provide('column-data', columnData)
    // check 变化的事件处理
    // 勾选时发射事件，将当前选中的行数据暴露出去
    // 监听单行勾选框状态变化，
    watch(
      data,
      (newData: any) => {
        const checkedRows = newData.filter((row: any) => row.checked)
        // 如果全部勾选，则设置全选框为选中状态
        if (checkedRows.length === data.value.length) {
          //全选
          allChecked.value = true
          // 如果全部未勾选，则设置全选框为未选中状态
          // 全部勾选
          isIndeterminate.value = false
        } else if (checkedRows.length === 0) {
          //全部未选中
          allChecked.value = false
          // 全部未勾选
          isIndeterminate.value = false
        } else {
          // 半选
          isIndeterminate.value = true
        }
        emit('selection-change', checkedRows)
      },
      { deep: true }
    )
    const allChecked = ref(data.value.every((row: any) => row.checked))
    provide('all-checked', allChecked)
    // 监听 allChecked 的变化，动态设置行勾选框的状态
    watch(allChecked, newVal => {
      data.value.forEach((row: any) => {
        row.checked = newVal
      })
    })
    const isIndeterminate = ref(
      data.value.some((row: any) => row.checked) && !allChecked.value
    )
    provide('is-indeterminate', isIndeterminate)
    const tableHeaderCellStyle = computed(() =>
      typeof headerCellStyle.value == 'object' ? true : false
    )
    provide('is-table-thead-styles', {
      isStyles: tableHeaderCellStyle.value,
      headerCellStyle: headerCellStyle.value
    })
    const tableThead = (tableThead: ColumnContext[], rowIndex = 0) => {
      return tableThead.map((item: ColumnContext, index: number) => {
        if (item.children) {
          rowIndex++
          return tableThead(item.children, rowIndex)
        }
        return typeof headerCellStyle.value == 'function' ? (
          <STableColumn
            {...item}
            key={index}
            style={headerCellStyle.value({
              row: tableThead,
              column: item,
              rowIndex,
              columnIndex: index
            })}
          />
        ) : (
          <STableColumn {...item} key={index} />
        )
      })
    }
    return () => (
      <table
        class={classNames('s-table', {
          's-table--border': border.value,
          's-table--striped': stripe.value
        })}
      >
        {slots.title ? <div class="table-title">{slots.title()}</div> : null}
        <thead style={showHeader.value ? '' : 'display:none'}>
          <tr style={tableHeaderCellStyle.value ? headerCellStyle.value : {}}>
            {columns.value.length > 0
              ? tableThead(columns.value)
              : slots.default?.()}
          </tr>
        </thead>
        <tbody>
          {/* <STableTbody
            data={data.value}
            columnData={columnData.value}
            stripe={stripe.value}
          >
          </STableTbody> */}
          {data.value.length > 0 ? (
            data.value.map((row: any, index: number) => (
              <tr
                class={classNames({
                  's-table__row--striped': index % 2 == 1 && stripe.value
                })}
              >
                {columnData.value.map(
                  (column: ColumnContext, index: number) => {
                    // 如果存在默认插槽，则优先渲染
                    const columnSlots = slots.default?.()[index]
                    if (columnSlots?.children) {
                      return (
                        <td>{(columnSlots?.children as any).default?.(row)}</td>
                      )
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
                  }
                )}
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
          )}
        </tbody>
        {slots.footer ? <div class="table-footer">{slots.footer()}</div> : null}
        {showSummary.value ? <div class="table-summary">总结</div> : null}
      </table>
    )
  }
})
