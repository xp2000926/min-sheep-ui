import { ExtractPropTypes } from 'vue';
import { DatePickerType } from '../date-picker-type';
import { definePropType } from '../../../utils.utils';

export const dateRangePanelProps = {
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date'
  }
} as const;
export type DateRangePanelProps = ExtractPropTypes<typeof dateRangePanelProps>;
