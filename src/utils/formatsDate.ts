type Format = 'day-month-year' | 'time' | 'weekday-date-time'

function intlFormat(date: Date, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('pt-BR', options).format(date)
}

export default function formatsDate(dateString: string, format: Format) {
  const date = new Date(dateString);
  let formattedDate, options: Intl.DateTimeFormatOptions

  switch (format) {
    case 'day-month-year':
      options =  {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      };

      formattedDate = intlFormat(date, options)
      break;
    case 'time':
      options = {
        hour: 'numeric',
        minute: 'numeric',
      };

      formattedDate = intlFormat(date, options)
      break;
    case 'weekday-date-time':
      options = {
        year: 'numeric',
        month: 'short',
        weekday: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      
      formattedDate = intlFormat(date, options);
      formattedDate = formattedDate.replace(/,|de /g, '').slice(0, -6) + ' -' + formattedDate.slice(-6);
      break;
    default:
      break;
  }

  return formattedDate
}