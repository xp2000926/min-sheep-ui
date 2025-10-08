import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export type ListType = 'text' | 'picture' | 'picture-card';
export interface UploadUserFile {
  name: string;
  url: string;
}

export const uploadProps = {
  action: {
    type: String,
    default: '#'
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  fileList: {
    type: Array<UploadUserFile>,
    default: () => []
  },
  limit: {
    type: Number,
    default: undefined
  },
  multiple: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  listType: {
    type: definePropType<ListType>(String),
    default: 'text'
  },
  // showFile: {
  //   type: Boolean,
  //   default: true
  // },
  accept: {
    type: String,
    default: ''
  },
  showFileList: {
    type: Boolean,
    default: true
  },
  drag: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: 'file'
  },
  beforeUpload: Function,
  onRemove: Function,
  onPreview: Function
  // onChange: Function,
  // onError: Function,
} as const;
export type UploadProps = ExtractPropTypes<typeof uploadProps>;
