import axios from '../services/api';

export function fetchHungers() {
  return axios.get('/hungers');
  console.log('working');
}
