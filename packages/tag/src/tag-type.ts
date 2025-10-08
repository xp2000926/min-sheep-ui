import { ExtractPropTypes } from 'vue';

export const tagProps = {} as const;
export type TagProps = ExtractPropTypes<typeof tagProps>;
