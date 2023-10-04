export interface ThunkCallback {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export function formatDateToISO(dateString: string): string {
  const parts = dateString.split('/');

  if (parts.length !== 3) {
    return dateString;
  }

  const day = parts[1].padStart(2, '0');
  const month = parts[0].padStart(2, '0');
  const year = parts[2];

  return `${year}-${day}-${month}`;
}

export function formatDateToLocale(dateString: string, device: string): string {
  const parts = dateString.split('/');
  const isIOS = device === 'IOS';

  if (parts.length !== 3) {
    return dateString;
  }

  const day = isIOS ? parts[0].padStart(2, '0') : parts[1].padStart(2, '0');
  const month = isIOS ? parts[1].padStart(2, '0') : parts[0].padStart(2, '0');
  const year = parts[2];

  return `${day}/${month}/${year}`;
}

export function formatTime(time: string): string {
  const parts = time.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);

  let formateMinutes = minutes.toString().padStart(2, '0');
  let formattedHours = hours.toString().padStart(2, '0');

  if (time.includes('PM') && hours !== 12) {
    formattedHours = (hours + 12).toString().padStart(2, '0');
  } else if (time.includes('AM') && hours === 12) {
    formattedHours = '00';
  }

  return `${formattedHours}:${formateMinutes}`;
}
