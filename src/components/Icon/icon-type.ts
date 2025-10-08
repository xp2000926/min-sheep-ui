import { ExtractPropTypes } from 'vue';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IconProps {
  border?: boolean;
  fixedWidth?: boolean;
  flip?: 'horizontal' | 'vertical' | 'both';
  icon: object | Array<string> | string | IconDefinition;
  mask?: object | Array<string> | string;
  listItem?: boolean;
  pull?: 'right' | 'left';
  pulse?: boolean;
  rotation?: 90 | 180 | 270 | '90' | '180' | '270';
  swapOpacity?: boolean;
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  spin?: boolean;
  transform?: object | string;
  symbol?: boolean | string;
  title?: string;
  inverse?: boolean;
  bounce?: boolean;
  shake?: boolean;
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  spinPulse?: boolean;
  spinReverse?: boolean;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  color?: string;
}

export const iconProps = {
  border: {
    type: Boolean,
    default: false
  },
  fixedWidth: {
    type: Boolean,
    default: false
  },
  flip: {
    type: String,
    default: undefined
  },
  icon: {
    type: [Object, Array, String],
    required: true
  },
  mask: {
    type: [Object, Array, String],
    default: undefined
  },
  listItem: {
    type: Boolean,
    default: false
  },
  pull: {
    type: String,
    default: undefined
  },
  pulse: {
    type: Boolean,
    default: false
  },
  rotation: {
    type: [Number, String],
    default: undefined
  },
  swapOpacity: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: undefined
  },
  spin: {
    type: Boolean,
    default: false
  },
  transform: {
    type: [Object, String],
    default: undefined
  },
  symbol: {
    type: [Boolean, String],
    default: false
  },
  title: {
    type: String,
    default: undefined
  },
  inverse: {
    type: Boolean,
    default: false
  },
  bounce: {
    type: Boolean,
    default: false
  },
  shake: {
    type: Boolean,
    default: false
  },
  beat: {
    type: Boolean,
    default: false
  },
  fade: {
    type: Boolean,
    default: false
  },
  beatFade: {
    type: Boolean,
    default: false
  },
  spinPulse: {
    type: Boolean,
    default: false
  },
  spinReverse: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  }
};

export type IconPropsType = ExtractPropTypes<typeof iconProps>;
