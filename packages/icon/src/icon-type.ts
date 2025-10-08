import type { ExtractPropTypes } from 'vue';
/**
 * IconPark 图标主题类型
 */
export type IconParkTheme = 'outline' | 'filled' | 'two-tone' | 'multi-color';
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
    type: String as () => 'iconpark' | 'iconfont',
    default: 'iconpark',
    validator: (val: string) => ['iconpark', 'iconfont'].includes(val),
    description: `图标库类型，默认 'iconpark'，设置为 'iconfont' 时切换到 iconfont 模式`
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
export type IconParkProps = ExtractPropTypes<typeof iconParkProps>;
