import { ExtractPropTypes, PropType } from 'vue';
import { definePropType } from '../../utils.utils';

export type DatePickerType =
  | 'year'
  | 'month'
  | 'date'
  | 'dates'
  | 'months'
  | 'years'
  | 'week'
  | 'quarter';
export type ShortcutsType = {
  text: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  value: Date | Function;
};
export const datePickerProps = {
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date'
  },
  shortcuts: {
    type: Array as PropType<ShortcutsType[]>,
    default: () => []
  }
} as const;
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
