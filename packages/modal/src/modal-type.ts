import { ExtractPropTypes, PropType } from 'vue';

export const modalProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  showClose: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: '30%'
  },
  center: {
    type: Boolean,
    default: false
  },
  alignCenter: {
    type: Boolean,
    default: false
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  top: {
    type: [String, Number] as PropType<string | number>,
    default: '15vh'
  },
  fullscreen: {
    type: Boolean,
    default: false,
    description: '是否全屏显示'
  },
  modal: {
    type: Boolean,
    default: true,
    description: '是否显示遮罩层'
  }
} as const;
export type ModalProps = ExtractPropTypes<typeof modalProps>;
