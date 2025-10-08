import { ExtractPropTypes } from 'vue';
import { definePropType } from '../../utils.utils';

export type SelectFieldType = {
  value?: string;
  label?: string;
  options?: string;
  disabled?: string;
};

export const selectProps = {
  modelValue: {
    type: [String, Array],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  field: {
    type: definePropType<SelectFieldType>(Object),
    default: () => ({
      value: 'value',
      label: 'label',
      options: 'options',
      disabled: 'disabled'
    })
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: '加载中'
  },
  multiple: {
    type: Boolean,
    default: false
  },
  filterable: {
    type: Boolean,
    default: false
  },
  remote: {
    type: Boolean,
    default: false
  },
  remoteMethod: {
    type: Function
  },
  reserveKeyword: {
    type: Boolean,
    default: false
  },
  remoteShowSuffix: {
    type: Boolean,
    default: false
  },
  allowCreate: {
    type: Boolean,
    default: false
  },
  defaultFirstOption: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: Function
  },
  emptyValues: {
    type: Array,
    default: () => [null, undefined, '']
  },
  valueOnClear: {
    type: [String, Number, null, undefined],
    default: ''
  }
} as const;

export type SelectProps = ExtractPropTypes<typeof selectProps>;
