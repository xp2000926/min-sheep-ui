import { computed, defineComponent, provide, toRefs, ref } from 'vue';
import { TableProps, tableProps } from './table-type';
import STableColumn from './table-column';
import classNames from 'classnames';
import { ColumnContext } from './table-column-type';

export default defineComponent({
  name: 'STable',
  props: tableProps,
  setup(props: TableProps, { slots }) {
    const {
      data,
      border,
      showSummary,
      stripe,
      headerCellStyle,
      showHeader,
      columns,
      rowClassName,
      height
    } = toRefs(props);
    // 获取 Column 数组中的列数据
    const columnData = ref([]);
    provide('column-data', columnData);
    const tableHeaderCellStyle = computed(() =>
      typeof headerCellStyle.value == 'object' ? true : false
    );
    provide('is-table-thead-styles', {
      isStyles: tableHeaderCellStyle.value,
      headerCellStyle: headerCellStyle.value
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allChecked = ref(data.value.every((row: any) => row.checked));
    provide('all-checked', allChecked);
    const isIndeterminate = ref(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.value.some((row: any) => row.checked) && !allChecked.value
    );
    provide('is-indeterminate', isIndeterminate);
    const tableThead = (tableThead: ColumnContext[], rowIndex = 0) => {
      return tableThead.map((item: ColumnContext, index: number) => {
        if (item.children) {
          rowIndex++;
          return tableThead(item.children, rowIndex);
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
          >
            {slots.default?.()}
          </STableColumn>
        ) : (
          <STableColumn {...item} key={index}>
            {slots.default?.()}
          </STableColumn>
        );
      });
    };
    // eslint-disable-next-line complexity
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
        <tbody
          style={
            height.value !== ''
              ? { height: `${Number(height.value)}px`, overflow: 'auto' }
              : {}
          }
        >
          {data.value.length > 0 ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.value.map((row: any, index: number) => {
              const newRowClassName =
                typeof rowClassName.value == 'function'
                  ? rowClassName.value({ row, rowIndex: index })
                  : rowClassName.value;
              return (
                <tr
                  class={classNames({
                    's-table__row--striped': index % 2 == 1 && stripe.value,
                    [newRowClassName]: true
                  })}
                >
                  {columnData.value.map(
                    (column: ColumnContext, index: number) => {
                      // 如果存在默认插槽，则优先渲染
                      const columnSlots = slots.default?.()[index];
                      if (columnSlots?.children) {
                        return (
                          <td>
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {(columnSlots?.children as any).default?.(row)}
                          </td>
                        );
                      }
                      return (
                        <td>
                          {column.prop ? (
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            row[column.prop!]
                          ) : column.type === 'selection' ? (
                            <input type="checkbox" v-model={row.checked} />
                          ) : (
                            ''
                          )}
                        </td>
                      );
                    }
                  )}
                </tr>
              );
            })
          ) : (
            <tr class="s-table-placeholder">
              <td colspan={columns.value.length || slots.default?.().length}>
                <div class="s-empty-description">
                  {slots.empty ? slots.empty() : '暂无数据'}
                </div>
              </td>
            </tr>
          )}
        </tbody>
        {slots.footer ? <div class="table-footer">{slots.footer()}</div> : null}
        {showSummary.value ? <div class="table-summary">总结</div> : null}
      </table>
    );
  }
});
