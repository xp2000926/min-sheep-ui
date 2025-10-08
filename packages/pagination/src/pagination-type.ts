import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';
export type PaginationComponent =
  | 'prev'
  | 'pager'
  | 'next'
  | 'jumper'
  | 'total';
// 定义组合字符串的类型
export type PaginationLayout =
  | `${PaginationComponent}, ${PaginationComponent}, ${PaginationComponent}`
  | `${PaginationComponent}, ${PaginationComponent}, ${PaginationComponent}, ${PaginationComponent}`
  | `${PaginationComponent}, ${PaginationComponent}, ${PaginationComponent}, ${PaginationComponent}, ${PaginationComponent}`;
export type Paginationsize = '' | 'small' | 'large' | 'default';

export const paginationProps = {
  // 是否简洁模式
  simple: {
    type: Boolean,
    default: false
  },
  layout: {
    type: definePropType<PaginationLayout>(String),
    default: 'sizes, prev, pager, next'
  },
  size: {
    type: definePropType<Paginationsize>(String),
    default: ''
  },
  background: {
    type: Boolean,
    default: false
  },
  hideOnSinglePage: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 0
  },
  pagerCount: {
    type: Number,
    default: 0
  },
  pageSizes: {
    type: Array<number>,
    default: () => [10, 20, 30, 40, 50, 100]
  },
  prevIcon: {
    type: String,
    default: ''
  },
  nextIcon: {
    type: String,
    default: ''
  },
  prevText: {
    type: String,
    default: ''
  },
  nextText: {
    type: String,
    default: ''
  }
} as const;
export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
