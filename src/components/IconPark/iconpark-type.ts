import { ExtractPropTypes } from 'vue';

/**
 * IconPark 图标主题类型
 */
export type IconParkTheme = 'outline' | 'filled' | 'two-tone' | 'multi-color';

/**
 * IconPark 图标大小类型
 */
export type IconParkSize = '1em' | '2em' | '3em' | '4em' | '5em' | string | number;

/**
 * IconPark 组件属性接口
 */
export interface IconParkProps {
  /** 图标名称（支持 IconPark 图标名称或自定义 SVG 图标名称） */
  name: string;
  /** 图标主题 */
  theme?: IconParkTheme;
  /** 图标大小 */
  size?: IconParkSize;
  /** 图标填充颜色 */
  fill?: string | string[];
  /** 图标描边颜色 */
  stroke?: string;
  /** 图标描边宽度 */
  strokeWidth?: number;
  /** 图标描边连接方式 */
  strokeLinejoin?: 'miter' | 'round' | 'bevel';
  /** 图标描边端点样式 */
  strokeLinecap?: 'butt' | 'round' | 'square';
  /** 图标类型（用于样式主题） */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** 自定义颜色 */
  color?: string;
  /** 是否旋转 */
  spin?: boolean;
  /** 旋转角度 */
  rotation?: number;
  /** 是否翻转 */
  flip?: 'horizontal' | 'vertical' | 'both';
  /** 自定义类名 */
  class?: string;
  /** 自定义样式 */
  style?: Record<string, any>;
}

/**
 * IconPark 组件属性定义
 */
export const iconParkProps = {
  /** 图标名称 */
  name: {
    type: String,
    required: true
  },
  /** 图标主题 */
  theme: {
    type: String as () => IconParkTheme,
    default: 'outline'
  },
  /** 图标大小 */
  size: {
    type: [String, Number] as any,
    default: '1em'
  },
  /** 图标填充颜色 */
  fill: {
    type: [String, Array] as any,
    default: undefined
  },
  /** 图标描边颜色 */
  stroke: {
    type: String,
    default: undefined
  },
  /** 图标描边宽度 */
  strokeWidth: {
    type: Number,
    default: undefined
  },
  /** 图标描边连接方式 */
  strokeLinejoin: {
    type: String,
    default: undefined
  },
  /** 图标描边端点样式 */
  strokeLinecap: {
    type: String,
    default: undefined
  },
  /** 图标类型（用于样式主题） */
  type: {
    type: String,
    default: undefined
  },
  /** 自定义颜色 */
  color: {
    type: String,
    default: undefined
  },
  /** 是否旋转 */
  spin: {
    type: Boolean,
    default: false
  },
  /** 旋转角度 */
  rotation: {
    type: Number,
    default: undefined
  },
  /** 是否翻转 */
  flip: {
    type: String,
    default: undefined
  },
  /** 自定义类名 */
  class: {
    type: String,
    default: undefined
  },
  /** 自定义样式 */
  style: {
    type: Object,
    default: undefined
  }
} as const;

/**
 * IconPark 组件属性类型
 */
export type IconParkPropsType = ExtractPropTypes<typeof iconParkProps>;
