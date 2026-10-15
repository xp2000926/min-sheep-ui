import { computed, defineComponent, VNode } from 'vue';
import {
  MatrixCellPayload,
  MatrixProps,
  MatrixLevel,
  matrixProps
} from './matrix-type';

const toSize = (v: number | string) => (typeof v === 'number' ? `${v}px` : v);

export default defineComponent({
  name: 'SMatrix',
  props: matrixProps,
  emits: {
    'cell-click': (payload: MatrixCellPayload) => !!payload,
    'cell-dblclick': (payload: MatrixCellPayload) => !!payload
  },
  setup(props: MatrixProps, { emit, slots }) {
    /** 行数：优先 data.length，其次 rowHeaders.length */
    const rows = computed(() => {
      if (props.data.length > 0) return props.data.length;
      return props.rowHeaders.length;
    });

    /** 列数：取 data 各行最大长度、colHeaders.length、footerRow.length 三者最大值 */
    const cols = computed(() => {
      const dataMax = props.data.reduce((max, row) => {
        return Math.max(max, Array.isArray(row) ? row.length : 0);
      }, 0);
      return Math.max(dataMax, props.colHeaders.length, props.footerRow.length);
    });

    const hasRowHeader = computed(() => props.rowHeaders.length > 0);
    const hasColHeader = computed(() => props.colHeaders.length > 0);
    const hasFooter = computed(() => props.footerRow.length > 0);

    const gridStyle = computed(() => ({
      display: 'grid',
      gridTemplateColumns:
        `${hasRowHeader.value ? toSize(props.rowHeaderWidth) + ' ' : ''}` +
        `repeat(${cols.value}, ${toSize(props.cellWidth)})`,
      gridTemplateRows:
        `${hasColHeader.value ? toSize(props.colHeaderHeight) + ' ' : ''}` +
        `repeat(${rows.value}, ${toSize(props.cellHeight)}) ` +
        `${hasFooter.value ? toSize(props.footerHeight) : ''}`.trim(),
      border: props.bordered ? '1px solid #d9d9d9' : 'none',
      borderRadius: '6px',
      overflow: 'hidden',
      backgroundColor: '#fff'
    }));

    const baseCellStyle = (): Record<string, any> => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent:
        props.align === 'left'
          ? 'flex-start'
          : props.align === 'right'
            ? 'flex-end'
            : 'center',
      padding: '0 12px',
      boxSizing: 'border-box',
      fontSize: '14px',
      borderRight: props.bordered ? '1px solid #d9d9d9' : 'none',
      borderBottom: props.bordered ? '1px solid #d9d9d9' : 'none'
    });

    const cornerStyle = computed(() => ({
      ...baseCellStyle(),
      backgroundColor: '#fafafa',
      fontWeight: 600,
      fontSize: '13px',
      color: '#666'
    }));

    const colHeaderStyle = computed(() => ({
      ...baseCellStyle(),
      backgroundColor: '#f0f5ff',
      fontWeight: 600,
      color: '#1d39c4'
    }));

    const rowHeaderStyle = computed(() => ({
      ...baseCellStyle(),
      backgroundColor: '#f6ffed',
      fontWeight: 600,
      color: '#237804'
    }));

    const dataCellStyle = computed(() => ({
      ...baseCellStyle(),
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      backgroundColor: '#fff'
    }));

    const footerCellStyle = computed(() => ({
      ...baseCellStyle(),
      backgroundColor: '#fafafa',
      fontWeight: 700,
      color: '#333',
      borderTop: props.bordered ? '2px solid #d9d9d9' : 'none'
    }));

    const getCellClass = (row: number, col: number) => {
      if (typeof props.cellClass === 'function')
        return props.cellClass(row, col);
      return props.cellClass;
    };

    const resolveLevel = (score: number): MatrixLevel | null => {
      if (!props.levelResolver) return null;
      return props.levelResolver(score);
    };

    const renderCellContent = (
      row: number,
      col: number
    ): VNode | string | number | null => {
      const value = props.data?.[row]?.[col];

      if (slots.default) {
        return slots.default({ row, col, value }) as unknown as VNode;
      }

      if (value === undefined || value === null) return '';

      if (props.showLevel && props.levelResolver && typeof value === 'number') {
        const lv = resolveLevel(value);
        if (lv) {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                lineHeight: 1.3
              }}
            >
              <span
                style={{ fontSize: '16px', fontWeight: 700, color: lv.color }}
              >
                {value}
              </span>
              <span
                style={{ fontSize: '11px', color: lv.color, opacity: 0.85 }}
              >
                {lv.label}
              </span>
            </div>
          ) as unknown as VNode;
        }
      }

      return value;
    };

    const handleClick = (row: number, col: number) => {
      emit('cell-click', { row, col, value: props.data?.[row]?.[col] });
    };

    const handleDblclick = (row: number, col: number) => {
      emit('cell-dblclick', { row, col, value: props.data?.[row]?.[col] });
    };

    const renderCells = () => {
      const cells: VNode[] = [];

      // 1. 列头行
      if (hasColHeader.value) {
        if (hasRowHeader.value) {
          cells.push(
            <div
              key="corner"
              class="s-matrix__corner"
              style={cornerStyle.value}
            >
              {props.cornerLabel || '环境要素 ⟍ 作战环节'}
            </div>
          );
        }
        for (let col = 0; col < cols.value; col++) {
          cells.push(
            <div
              key={`ch-${col}`}
              class="s-matrix__col-header"
              style={colHeaderStyle.value}
            >
              {props.colHeaders[col] ?? ''}
            </div>
          );
        }
      }

      // 2. 数据行
      for (let row = 0; row < rows.value; row++) {
        if (hasRowHeader.value) {
          cells.push(
            <div
              key={`rh-${row}`}
              class="s-matrix__row-header"
              style={rowHeaderStyle.value}
            >
              {props.rowHeaders[row] ?? ''}
            </div>
          );
        }
        for (let col = 0; col < cols.value; col++) {
          cells.push(
            <div
              key={`${row}-${col}`}
              class={['s-matrix__cell', getCellClass(row, col)]}
              style={dataCellStyle.value}
              onClick={() => handleClick(row, col)}
              onDblclick={() => handleDblclick(row, col)}
            >
              {renderCellContent(row, col)}
            </div>
          );
        }
      }

      // 3. 底部汇总行
      if (hasFooter.value) {
        if (hasRowHeader.value) {
          cells.push(
            <div
              key="footer-label"
              class="s-matrix__footer-label"
              style={footerCellStyle.value}
            >
              {props.footerLabel}
            </div>
          );
        }
        for (let col = 0; col < cols.value; col++) {
          const v = props.footerRow[col];
          cells.push(
            <div
              key={`ft-${col}`}
              class="s-matrix__footer-cell"
              style={footerCellStyle.value}
            >
              {v === null || v === undefined ? '—' : v}
            </div>
          );
        }
      }

      return cells;
    };

    return () => (
      <div class="s-matrix" style={gridStyle.value}>
        {renderCells()}
      </div>
    );
  }
});
