import dayjs from 'dayjs';
export const getYears = (date: Date) => dayjs(date).format('YYYY');
export const getMonth = (date: Date) => dayjs(date).format('MM');
export const daysOfMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();
export const firstDayOfMonth = (year: number, month: number) =>
  new Date(year, month, 1).getDay();
export const getSectionYears = date => {
  return [
    Math.floor(Number(dayjs(date).format('YYYY')) / 10) * 10,
    Math.floor(Number(dayjs(date).format('YYYY')) / 10) * 10 + 9
  ];
};
// export const isArray = (arr: any) => {
//   return Array.isArray(arr);
//   // return Object.prototype.toString.call(arr) === '[object Array]';
//   // return arr instanceof Array;
// };
