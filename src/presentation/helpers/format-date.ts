import { addZeroToLeft } from './add-zero-to-left';

export function formatDate(date: string) {
  const newDate = new Date(date);
  let day: number | string = newDate.getDate();
  day = day < 10 ? addZeroToLeft(day) : day;
  let month: number | string = newDate.getMonth() + 1;
  month = month < 10 ? addZeroToLeft(month) : month;
  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
}
