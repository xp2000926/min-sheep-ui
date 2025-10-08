import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export const datePickerPanelProps = {
  modelValue: {
    type: Date,
    default: () => new Date(),
    validator: (val: Date) => {
      return val instanceof Date;
    }
  },
  week: {
    type: definePropType<number | string>([Number, String]),
    default: 0,
    validator: (val: number | string) => {
      return Number(val) >= 0 && Number(val) <= 6;
    }
  }
} as const;
export type DatePickerPanelProps = ExtractPropTypes<
  typeof datePickerPanelProps
>;
