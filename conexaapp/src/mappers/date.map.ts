class DateMap {
  static toServer(date: string): string {
    return `${date.split('/')[2]}-${date.split('/')[1]}-${date.split('/')[0]}`;
  }

  static toBr(date: string): string {
    return `${date.split('-')[2]}/${date.split('-')[1]}/${date.split('-')[0]}`;
  }
}

export {DateMap};
