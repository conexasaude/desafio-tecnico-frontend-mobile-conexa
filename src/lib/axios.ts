import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageKeys } from '@/lib/constants/storageKeys';
import { BASE_URL } from '@env';
import { User } from '@/models/user';

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  async config => {
    const data = await AsyncStorage.getItem(storageKeys.user);
    const user = data != null ? (JSON.parse(data) as User) : null;

    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
