import { ExtractPropTypes, PropType } from 'vue';
import { definePropType } from '../../utils.utils';
import { ShortcutsType } from './date-picker-type';

export type RangePickerType =
  | 'date'
  | 'week'
  | 'month'
  | 'year'
  | 'quarter'
  | 'datetime';

export const rangePickerProps = {
  type: {
    type: definePropType<RangePickerType>(String),
    default: 'date'
  },
  shortcuts: {
    type: Array as PropType<ShortcutsType[]>,
    default: () => []
  },
  rangeSeparator: {
    type: String,
    default: '-'
  }
} as const;
export type RangePickerProps = ExtractPropTypes<typeof rangePickerProps>;
