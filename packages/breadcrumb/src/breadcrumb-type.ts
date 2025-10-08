import { ExtractPropTypes } from 'vue';

export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/'
  },
  separatorClass: {
    type: String,
    default: ''
  },
  isIcon: {
    type: Boolean,
    default: false
  }
} as const;
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
