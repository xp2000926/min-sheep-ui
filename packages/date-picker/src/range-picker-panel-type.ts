import { ExtractPropTypes, PropType } from 'vue';
import { definePropType } from '../../utils.utils';
import { RangePickerType } from './range-picker-type';
import { ShortcutsType } from './date-picker-type';

export const rangePickerPanelProps = {
  type: {
    type: definePropType<RangePickerType>(String),
    default: 'date'
  },
  shortcuts: {
    type: Array as PropType<ShortcutsType[]>,
    default: () => []
  }
} as const;
export type RangePickerPanelProps = ExtractPropTypes<
  typeof rangePickerPanelProps
>;
