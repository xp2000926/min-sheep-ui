import { ExtractPropTypes } from 'vue';
import { DatePickerType } from '../date-picker-type';
import { definePropType } from '../../../utils.utils';

export const datePanelProps = {
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date'
  }
} as const;
export type DatePanelProps = ExtractPropTypes<typeof datePanelProps>;
