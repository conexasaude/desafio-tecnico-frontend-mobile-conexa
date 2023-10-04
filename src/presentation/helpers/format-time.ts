import { addZeroToLeft } from './add-zero-to-left';

export function formatTime(hours: number, minutes: number) {
  const formattedHour = hours < 10 ? addZeroToLeft(hours) : hours.toString();
  const formattedMinutes = minutes < 10 ? addZeroToLeft(minutes) : minutes.toString();

  return `${formattedHour}:${formattedMinutes}`;
}
