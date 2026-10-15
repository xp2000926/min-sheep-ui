import { ExtractPropTypes, PropType } from 'vue';

export interface MatrixCellPayload {
  row: number;
  col: number;
  value: any;
}

export interface MatrixLevel {
  label: string;
  className: string;
  color: string;
}

export type MatrixLevelResolver = (score: number) => MatrixLevel;
export type MatrixCellClass = string | ((row: number, col: number) => string);
export type MatrixAlign = 'left' | 'center' | 'right';

export const matrixProps = {
  /** 矩阵数据：二维数组，行数 = data.length，列数 = data[0].length */
  data: {
    type: Array as PropType<any[][]>,
    default: () => []
  },
  /** 列头（横向表头），长度即列数 */
  colHeaders: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  /** 行头（纵向表头），长度即行数 */
  rowHeaders: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  /** 底部汇总行数据 */
  footerRow: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  /** 底部汇总行左侧标题 */
  footerLabel: {
    type: String,
    default: '均值'
  },
  /** 左上角标题文字 */
  cornerLabel: {
    type: String,
    default: ''
  },
  /** 是否在单元格内显示等级文字 */
  showLevel: {
    type: Boolean,
    default: false
  },
  /** 等级解析函数，返回 { label, className, color } */
  levelResolver: {
    type: Function as PropType<MatrixLevelResolver>,
    default: null
  },
  /** 单元格宽度 */
  cellWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 110
  },
  /** 单元格高度 */
  cellHeight: {
    type: [Number, String] as PropType<number | string>,
    default: 56
  },
  /** 行头宽度 */
  rowHeaderWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 120
  },
  /** 列头高度 */
  colHeaderHeight: {
    type: [Number, String] as PropType<number | string>,
    default: 44
  },
  /** 汇总行高度 */
  footerHeight: {
    type: [Number, String] as PropType<number | string>,
    default: 48
  },
  /** 是否显示边框 */
  bordered: {
    type: Boolean,
    default: true
  },
  /** 内容对齐方式 */
  align: {
    type: String as PropType<MatrixAlign>,
    default: 'center'
  },
  /** 自定义单元格类名 */
  cellClass: {
    type: [String, Function] as PropType<MatrixCellClass>,
    default: ''
  }
} as const;

export type MatrixProps = ExtractPropTypes<typeof matrixProps>;
