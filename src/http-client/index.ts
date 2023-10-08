import axios from 'axios'

import { BASE_URL } from '@env'

export const httpClient = axios.create({
  baseURL: BASE_URL,
})
