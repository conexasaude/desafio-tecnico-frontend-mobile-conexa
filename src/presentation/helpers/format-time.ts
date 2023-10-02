import { addZeroToLeft } from './add-zero-to-left';

export function formatTime(date: string) {
  const newDate = new Date(date);
  let hours: number | string = newDate.getHours();
  hours = hours < 10 ? addZeroToLeft(hours) : hours;
  let minutes: number | string = newDate.getMinutes();
  minutes = minutes < 10 ? addZeroToLeft(minutes) : minutes;

  return `${hours}:${minutes}`;
}
