import { defineComponent, toRefs, ref } from 'vue';
import {
  DatePickerPanelProps,
  datePickerPanelProps
} from './date-picker-panel-type';
import DatePanel from './components/date-panel';
import YearPanel from './components/year-panel';
import MonthPanel from './components/month-panel';
import WeekPanel from './components/week-panel';
import QuarterPanel from './components/quarter-Panel';

export default defineComponent({
  name: 'SDatePickerPanel',
  props: datePickerPanelProps,
  emits: ['update:type'],
  setup(props: DatePickerPanelProps, { emit }) {
    const { type } = toRefs(props);
    const datePickerPanelType = ref(type.value);
    return () => (
      <div class="s-date-picker-panel">
        {datePickerPanelType.value == 'date' ||
        datePickerPanelType.value == 'dates' ? (
          <DatePanel
            type={type.value}
            onUpdate:type={val => {
              emit('update:type', val);
              datePickerPanelType.value = val;
            }}
          />
        ) : datePickerPanelType.value == 'year' ||
          datePickerPanelType.value == 'years' ? (
          <YearPanel />
        ) : datePickerPanelType.value == 'month' ||
          datePickerPanelType.value == 'months' ? (
          <MonthPanel />
        ) : datePickerPanelType.value == 'week' ? (
          <WeekPanel />
        ) : datePickerPanelType.value == 'datetime' ? (
          <DateTimePanel />
        ) : datePickerPanelType.value == 'quarter' ? (
          <QuarterPanel />
        ) : null}
      </div>
    );
  }
});
