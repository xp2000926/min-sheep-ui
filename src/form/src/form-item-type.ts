import { ExtractPropTypes } from 'vue';
import { FormLabelPosition, FormSize } from './form-type';

export const formItemProps = {
  label: {
    type: String,
    default: ''
  }
} as const;
export type LabelData = {
  inline: boolean;
  size: FormSize;
  labelPosition: FormLabelPosition;
};
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
