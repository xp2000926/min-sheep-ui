import { defineComponent, toRefs, ref } from 'vue';
import { CalendarProps, calendarProps } from './calendar-type';
import dayjs from 'dayjs';
import { Button, ButtonGroup } from '../../button';

export default defineComponent({
  name: 'SCalendar',
  props: calendarProps,
  setup(props: CalendarProps) {
    const { modelValue } = toRefs(props);
    const date = ref(new Date(modelValue.value));
    return () => (
      <div class="s-calendar">
        <div class="s-calendar--header">
          <div class="s-calendar-title">
            {dayjs(date.value).format('YYYY 月 MM 日')}
          </div>
          <ButtonGroup>
            <Button
              size="small"
              onClick={() => {
                date.value = new Date(
                  date.value.getFullYear(),
                  date.value.getMonth() - 1,
                  1
                );
              }}
            >
              上个月
            </Button>
            <Button
              size="small"
              onClick={() => {
                date.value = new Date();
              }}
            >
              今天
            </Button>
            <Button
              size="small"
              onClick={() => {
                date.value = new Date(
                  date.value.getFullYear(),
                  date.value.getMonth() + 1,
                  1
                );
              }}
            >
              下个月
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
});
