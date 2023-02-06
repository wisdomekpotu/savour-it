import axios from '../services/api';

export function fetchCategories() {
  return axios.get('/categories');
}
