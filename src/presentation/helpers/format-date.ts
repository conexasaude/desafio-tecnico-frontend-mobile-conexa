import { addZeroToLeft } from './add-zero-to-left';

export function formatDate(date?: Date) {
  if (!date) {
    return '';
  }

  let rawDate = date;

  if (typeof date === 'string') {
    rawDate = new Date(date);
  }

  const year = rawDate.getFullYear();
  const month = rawDate.getMonth() + 1;
  const formattedMonth = month < 10 ? addZeroToLeft(month) : month;
  const day = rawDate.getDate();
  const formattedDay = day < 10 ? addZeroToLeft(day) : day;

  return `${formattedDay}/${formattedMonth}/${year}`;
}
