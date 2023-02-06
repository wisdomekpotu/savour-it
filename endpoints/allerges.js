import axios from '../services/api';

export function fetchAllergens() {
  return axios.get('/allergens');
}
