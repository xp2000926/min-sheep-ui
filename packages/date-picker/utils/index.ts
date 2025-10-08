import dayjs from 'dayjs';
export const getYears = (date: Date) => dayjs(date).format('YYYY');
export const getMonth = (date: Date) => dayjs(date).format('MM');
export const daysOfMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();
export const firstDayOfMonth = (year: number, month: number) =>
  new Date(year, month, 1).getDay();
