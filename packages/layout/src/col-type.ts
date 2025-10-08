import { ExtractPropTypes } from 'vue';
import { definePropType, mutable } from '../../utils.utils';

export type ColSizeObject = {
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
};
export type ColSize = number | ColSizeObject;

export const colProps = {
  /**
   * @description custom element tag
   */
  tag: {
    type: String,
    default: 'div'
  },
  /**
   * @description number of column the grid spans
   */
  span: {
    type: Number,
    default: 24
  },
  /**
   * @description number of spacing on the left side of the grid
   */
  offset: {
    type: Number,
    default: 0
  },
  /**
   * @description number of columns that grid moves to the left
   */
  pull: {
    type: Number,
    default: 0
  },
  /**
   * @description number of columns that grid moves to the right
   */
  push: {
    type: Number,
    default: 0
  },
  /**
   * @description `<768px` Responsive columns or column props object
   */
  xs: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  },
  /**
   * @description `≥768px` Responsive columns or column props object
   */
  sm: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  },
  /**
   * @description `≥992px` Responsive columns or column props object
   */
  md: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  },
  /**
   * @description `≥1200px` Responsive columns or column props object
   */
  lg: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  },
  /**
   * @description `≥1920px` Responsive columns or column props object
   */
  xl: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const)
  }
} as const;
export type ColProps = ExtractPropTypes<typeof colProps>;
