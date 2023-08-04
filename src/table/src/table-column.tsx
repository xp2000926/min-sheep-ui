import { Ref, defineComponent, inject, toRefs } from 'vue'
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
    const { prop, title } = toRefs(props)
    //  讲列数据传给Table组件
    const columnData = inject<Ref<ColumnContext[]>>('column-data')
    columnData!.value.push({
      prop: prop.value,
      title: title.value
    })
    return () => <th class="s-table-column">{title.value}</th>
  }
})