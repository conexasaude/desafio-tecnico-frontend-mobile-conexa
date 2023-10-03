import { addZeroToLeft } from './add-zero-to-left';

export function formatDate(date?: Date) {
  if (!date) {
    return '';
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const formattedMonth = month < 10 ? addZeroToLeft(month) : month;
  const day = date.getDate();
  const formattedDay = day < 10 ? addZeroToLeft(day) : day;

  return `${formattedDay}/${formattedMonth}/${year}`;
}
