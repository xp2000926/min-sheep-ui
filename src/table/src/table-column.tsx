import { Ref, defineComponent, inject, nextTick, ref, toRefs, watch } from 'vue'
import {
  TableColumnProps,
  tableColumnProps,
  ColumnContext
} from './table-column-type'
import '../../index.scss'
import '../style/table-column.scss'

export default defineComponent({
  name: 'STableColumn',
  props: tableColumnProps,
  setup(props: TableColumnProps) {
    const { prop, title, type } = toRefs(props)
    //  讲列数据传给Table组件
    const columnData = inject<Ref<ColumnContext[]>>('column-data')
    columnData!.value.push({
      prop: prop.value,
      title: title.value,
      type: type.value
    })
    //定义一个响应式变量，它的值来自父组件
    const allChecked = inject<Ref<boolean>>('all-checked')

    // 定义半选状态，它的值从父组件传入
    const isIndeterminate = inject<Ref<boolean>>('is-indeterminate')
    const checkboxRef = ref()
    // dom渲染完之后，设置半选状态
    nextTick(() => {
      if (checkboxRef.value) {
        checkboxRef.value.indeterminate = isIndeterminate!.value
      }
    })
    // 监听半选状态变化，并设置全选框的半选状态
    watch(
      isIndeterminate!,
      () => {
        if (!checkboxRef.value) return
        checkboxRef.value.indeterminate = isIndeterminate!.value
      },
      { immediate: true }
    )
    const tableHeaderStyles = inject<
      Ref<{
        isStyles: boolean
        headerCellStyle: Function
        columnData: ColumnContext[]
      }>
    >('is-table-thead-styles')
    return () =>
      tableHeaderStyles.isStyles == false ? (
        tableHeaderStyles.columnData.map((item, columnIndex) => {
          return (
            <th
              class="s-table-column"
              style={tableHeaderStyles.headerCellStyle({
                row: tableHeaderStyles.columnData,
                column: item,
                rowIndex: 1,
                columnIndex
              })}
            >
              {type.value === 'selection' ? (
                <input
                  // 增加 ref 用于获取dom元素，设置半选状态
                  ref={checkboxRef}
                  type="checkbox"
                  // 增加双向绑定
                  v-model={allChecked!.value}
                />
              ) : (
                title.value
              )}
            </th>
          )
        })
      ) : (
        <th class="s-table-column">
          {type.value === 'selection' ? (
            <input
              // 增加 ref 用于获取dom元素，设置半选状态
              ref={checkboxRef}
              type="checkbox"
              // 增加双向绑定
              v-model={allChecked!.value}
            />
          ) : (
            title.value
          )}
        </th>
      )
  }
})
