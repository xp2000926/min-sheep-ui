import { definePropType } from '../../utils.utils';
import { ExtractPropTypes } from 'vue';

export const baseSemiSelectionProps = {
  onClick: {
    type: definePropType<(e: Event) => void>(Function),
    required: true
  }
} as const;
export type BaseSemiSelectionProps = ExtractPropTypes<
  typeof baseSemiSelectionProps
>;
