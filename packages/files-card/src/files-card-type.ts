import { ExtractPropTypes } from 'vue';
import type { CSSProperties } from 'vue';
import { definePropType } from '../../utils.utils';

export type FilesType =
  | 'word'
  | 'excel'
  | 'ppt'
  | 'pdf'
  | 'txt'
  | 'mark'
  | 'image'
  | 'audio'
  | 'video'
  | 'three'
  | 'code'
  | 'database'
  | 'link'
  | 'zip'
  | 'file'
  | 'unknown';
export type StatusType = 'uploading' | 'done' | 'error' | '';
export const filesCardProps = {
  name: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  fileSize: {
    type: Number,
    default: undefined
  },
  fileType: {
    type: definePropType<FilesType>(String),
    default: ''
  },
  maxWidth: {
    type: String,
    default: '236px'
  },
  iconSize: {
    type: String,
    default: '42px'
  },
  imgVariant: {
    type: String,
    default: 'rectangle'
  },
  imgPreview: {
    type: Boolean,
    default: true
  },
  style: {
    type: Object,
    default: () => ({})
  },
  iconColor: {
    type: String || undefined,
    default: undefined
  },
  // 文件状态
  status: {
    type: definePropType<StatusType>(String),
    default: undefined
  },
  // 上传进度
  percent: {
    type: Number,
    default: undefined
  },
  // 失败提示信息
  errorTip: {
    type: String,
    default: undefined
  },
  thumbUrl: {
    type: String,
    default: undefined
  },
  hoverStyle: {
    type: Object as () => CSSProperties,
    default: undefined
  }
} as const;
export type FilesCardProps = ExtractPropTypes<typeof filesCardProps>;
