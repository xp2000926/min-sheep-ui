import { defineComponent, inject, toRefs, Ref, ref, nextTick, watch } from 'vue'
import { tableHeaderProps, TableHeaderProps } from './table-header-type'
import { ColumnContext } from './table-column-type'
import STableColumn from './table-column'
export default defineComponent({
  name: 'STableHeader',
  props: tableHeaderProps,
  setup(props: TableHeaderProps) {
    const { columns } = toRefs(props)
    return () => (
      <>
        {columns.value.map((item: ColumnContext, index: number) => (
          <STableColumn {...item} key={index} />
        ))}
      </>
    )
  }
})
