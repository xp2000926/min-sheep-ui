import { ExtractPropTypes } from 'vue';
import { DatePickerType } from '../date-picker-type';
import { definePropType } from '../../../utils.utils';

export const monthPanelProps = {
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date'
  }
} as const;
export type MonthPanelProps = ExtractPropTypes<typeof monthPanelProps>;
