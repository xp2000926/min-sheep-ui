import { ExtractPropTypes } from 'vue';

export const asideProps = {
  width: {
    type: String,
    default: '300px'
  }
} as const;
export type AsideProps = ExtractPropTypes<typeof asideProps>;
