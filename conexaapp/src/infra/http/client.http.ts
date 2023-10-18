import axios from 'axios';
import {BASE_URL} from '../../env';

const headers = {
  'Content-Type': 'application/json',
};

const client = axios.create({
  baseURL: BASE_URL,
  headers,
});

export {client};
