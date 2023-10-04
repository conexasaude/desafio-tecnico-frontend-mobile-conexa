export function formatDayMonthYear(dateString: string) {
    const date = new Date(dateString);
    

    const formatter = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    
    return formatter.format(date).replace(' ', ' às ');
}

export function formatHourMinute(dateString: string) {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
  });
  
  return formatter.format(date).replace(' ', ' às ');
}

export function formatWeekdayDateTime(dateString: string) {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'short',
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  
  return formatter.format(date).replace(',', '');
}