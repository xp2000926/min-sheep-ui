import { ExtractPropTypes } from 'vue';

export const calendarProps = {
  modelValue: {
    type: Object as () => Date,
    required: true
  }
} as const;
export type CalendarProps = ExtractPropTypes<typeof calendarProps>;
