import { ExtractPropTypes } from 'vue';
import { DatePickerType } from '../date-picker-type';
import { definePropType } from '../../../utils.utils';

export const quarterPanelProps = {
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date'
  }
} as const;
export type QuarterPanelProps = ExtractPropTypes<typeof quarterPanelProps>;
