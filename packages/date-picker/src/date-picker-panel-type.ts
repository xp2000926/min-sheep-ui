import { ExtractPropTypes, PropType } from 'vue';
import { definePropType } from '../../utils.utils';
import { DatePickerType, ShortcutsType } from './date-picker-type';

export const datePickerPanelProps = {
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date'
  },
  shortcuts: {
    type: Array as PropType<ShortcutsType[]>,
    default: () => []
  }
} as const;
export type DatePickerPanelProps = ExtractPropTypes<
  typeof datePickerPanelProps
>;
