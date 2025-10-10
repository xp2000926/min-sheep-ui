import type { ExtractPropTypes } from 'vue';
/**
 * IconPark 图标主题类型
 */
export type IconTheme = 'outline' | 'filled' | 'two-tone' | 'multi-color';
export const iconProps = {
  /** 图标名称 */
  name: {
    type: String,
    required: true
  },
  /** 图标主题 */
  theme: {
    type: String as () => IconTheme,
    default: 'outline'
  } /** 自定义颜色 */,
  color: {
    type: String,
    default: undefined
  },
  /** 图标大小 */
  size: {
    type: [String, Number] as any,
    default: '1em'
  } /** 图标类型（用于样式主题） */,
  type: {
    type: String,
    default: undefined
  },
  iconType: {
    type: String as () => 'icon' | 'iconfont',
    default: 'icon',
    validator: (val: string) => ['icon', 'iconfont'].includes(val),
    description: `图标库类型，默认 'icon'，设置为 'iconfont' 时切换到 iconfont 模式`
  },
  iconfontUrl: {
    type: String,
    default: '',
    description: `必填（iconfont 模式下），传入从 iconfont 下载的 “在线 CSS 地址”`
  },
  iconfontClass: {
    type: String,
    default: '',
    description: '可选，补充 iconfont 自定义类名（如图标库的额外样式类）'
  },
  /** 图标填充颜色 */
  fill: {
    type: [String, Array] as any,
    default: undefined
  } /** 自定义类名 */,
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
export type IconProps = ExtractPropTypes<typeof iconProps>;
