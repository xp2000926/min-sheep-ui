import { defineComponent, toRefs, ref } from 'vue';
import {
  DatePickerPanelProps,
  datePickerPanelProps
} from './date-picker-panel-type';
import DoubleLeft from './icon/double-left';
import Left from './icon/left';
import DoubleRight from './icon/double-right';
import Right from './icon/right';
import {
  getYears,
  getMonth,
  daysOfMonth,
  firstDayOfMonth,
  getSectionYears
} from '../utils';
import classnames from 'classnames';

export default defineComponent({
  name: 'SDatePickerPanel',
  props: datePickerPanelProps,
  setup(props: DatePickerPanelProps) {
    const { modelValue, week } = toRefs(props);
    const weekdayList = ['日', '一', '二', '三', '四', '五', '六'];
    const date = modelValue.value;
    // const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    // const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
    const sectionYears = getSectionYears(modelValue.value as unknown as Date);
    const isSelectYears = ref(false);
    const startYears = sectionYears[0];
    const endYears = sectionYears[1];
    const renderDates = () => {
      const days = [];

      const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
      const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} class="empty"></div>);
      }

      for (let i = 1; i <= daysCount; i++) {
        // current
        if (i == modelValue.value.getDate()) {
          days.push(
            <div key={i} class="s-date-panel-date today">
              {i}
            </div>
          );
        } else {
          days.push(
            <div key={i} class="s-date-panel-date">
              {i}
            </div>
          );
        }
      }

      return days;
    };
    return () => (
      <div class="s-date-picker-panel">
        <div
          class={classnames('s-date-picker-panel-header', {
            'select-years': isSelectYears.value
          })}
        >
          <DoubleLeft class="icon" />
          {!isSelectYears.value && <Left class="icon" />}
          {isSelectYears.value ? (
            <div class="txt">
              {startYears}年-{endYears}年
            </div>
          ) : (
            <div class="txt flex">
              <div
                class="years"
                onClick={() => {
                  isSelectYears.value = true;
                }}
              >
                {getYears(modelValue.value as unknown as Date)}年
              </div>
              <div class="month">
                {getMonth(modelValue.value as unknown as Date)}月
              </div>
            </div>
          )}

          {!isSelectYears.value && <Right class="icon" />}
          <DoubleRight class="icon" />
        </div>
        {isSelectYears.value ? (
          <div class="s-date-picker-panel-body">
            <div className="s-date-picker-panel-years">
              {Array(endYears - startYears + 1)
                .fill(0)
                .map((_, index) => (
                  <div
                    class={classnames('s-date-picker-panel-year', {
                      today: startYears + index == date.getFullYear()
                    })}
                  >
                    {startYears + index}
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div class="s-date-picker-panel-body">
            <div class="s-date-picker-panel-weekdays">
              {weekdayList.map((item: string, index: number) => (
                <div class="s-date-picker-panel-weekdays--day" key={index}>
                  {weekdayList[(index + Number(week.value) + 7) % 7]}
                </div>
              ))}
            </div>
            <div class="s-date-panel-dates">{renderDates()}</div>
          </div>
        )}
      </div>
    );
  }
});
