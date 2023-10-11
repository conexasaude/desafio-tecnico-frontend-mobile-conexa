import axios from 'axios'

import { BASE_URL } from '@env'
import { store } from '@store'

export const httpClient = axios.create({
  baseURL: BASE_URL,
})

httpClient.interceptors.request.use(
  async (config) => {
    const token = store.getState().auth.user?.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
