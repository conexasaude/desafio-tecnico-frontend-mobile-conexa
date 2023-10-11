import dayjs from 'dayjs'

import utc from 'dayjs/plugin/utc'

export function useDate() {
  dayjs.extend(utc)
  return dayjs
}
