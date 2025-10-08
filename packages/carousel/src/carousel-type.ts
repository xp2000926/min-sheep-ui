import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export type DirectionType = 'horizontal' | 'vertical';
export type TypeType = 'default' | 'card' | 'opacity' | '';

export const carouselProps = {
  type: {
    type: definePropType<TypeType>(String),
    default: 'default'
  },
  // 自动切换的时间间隔，单位为毫秒
  interval: {
    type: Number,
    default: 3000
  },
  // 是否循环显示
  loop: {
    type: Boolean,
    default: true
  },
  // 初始状态激活的幻灯片的索引，从 0 开始
  initialIndex: {
    type: Number,
    default: 0
  },
  // 走马灯展示的方向
  direction: {
    type: definePropType<DirectionType>(String),
    default: 0
  },
  //轮播图之间的间距
  slidesPerView: {
    type: Number,
    default: 0
  }, // 是否展示指示点
  spaceBetween: {
    type: Number,
    default: 0
  },
  // 是否显示箭头按钮
  showArrow: {
    type: Boolean,
    default: true
  },
  // 是否展示指示点
  showDots: {
    type: Boolean,
    default: true
  }
} as const;
export type CarouselProps = ExtractPropTypes<typeof carouselProps>;
