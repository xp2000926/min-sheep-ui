import { ExtractPropTypes, PropType } from 'vue';

export const scrollProps = {
  // 内容元素获取函数
  content: Function as PropType<() => HTMLElement | null | undefined>,
  // 容器元素获取函数
  container: Function as PropType<() => HTMLElement | null | undefined>,
  // 垂直滚动条位置
  yPlacement: {
    type: String as PropType<'left' | 'right'>,
    default: 'right'
  },
  // 水平滚动条位置
  xPlacement: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'bottom'
  },
  // 是否可滚动
  scrollable: {
    type: Boolean,
    default: true
  },
  // 是否使用统一容器
  useUnifiedContainer: Boolean,
  // 滚动条大小
  railSize: {
    type: Number,
    default: 5
  },
  // 滚动条最小大小
  minRailSize: {
    type: Number,
    default: 20
  },
  // 是否显示水平滚动条
  showXScroll: {
    type: Boolean,
    default: true
  },
  // 是否显示垂直滚动条
  showYScroll: {
    type: Boolean,
    default: true
  },
  // 滚动条颜色
  railColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.25)'
  },
  // 滚动条悬停颜色
  railHoverColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.4)'
  },
  trigger: {
    type: String as PropType<'hover' | 'none'>,
    default: 'hover'
  },
  // 自定义样式类名
  customClass: {
    type: String,
    default: ''
  },
  // 自定义滚动条样式
  customRailStyle: {
    type: Object as PropType<Record<string, string | number>>,
    default: () => ({})
  },
  // 自定义滚动条滑块样式
  customBarStyle: {
    type: Object as PropType<Record<string, string | number>>,
    default: () => ({})
  },
  // 自定义容器样式
  customContainerStyle: {
    type: Object as PropType<Record<string, string | number>>,
    default: () => ({})
  },
  // 自定义内容区域样式
  customContentStyle: {
    type: Object as PropType<Record<string, string | number>>,
    default: () => ({})
  }
} as const;

export type ScrollProps = ExtractPropTypes<typeof scrollProps>;

// 滚动条状态接口
export interface ScrollState {
  // 内容尺寸
  contentWidth: number;
  contentHeight: number;
  // 容器尺寸
  containerWidth: number;
  containerHeight: number;
  // 滚动位置
  scrollLeft: number;
  scrollTop: number;
  // 滚动条尺寸
  xRailSize: number;
  yRailSize: number;
  // 滚动条位置
  xRailLeft: number;
  yRailTop: number;
  // 是否显示滚动条
  showXScroll: boolean;
  showYScroll: boolean;
}
