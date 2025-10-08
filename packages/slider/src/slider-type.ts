import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export type sliderPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export const sliderProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  showInput: {
    type: Boolean,
    default: false
  },
  marks: {
    type: Array,
    default: []
  },
  placement: {
    type: definePropType<sliderPlacement>(String),
    default: 'top'
  }
} as const;
export type SliderProps = ExtractPropTypes<typeof sliderProps>;
