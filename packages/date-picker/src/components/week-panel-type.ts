import { ExtractPropTypes } from 'vue';
import { DatePickerType } from '../date-picker-type';
import { definePropType } from '../../../utils.utils';

export const weekPanelProps = {
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date'
  }
} as const;
export type WeekPanelProps = ExtractPropTypes<typeof weekPanelProps>;
