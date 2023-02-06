import axios from '../services/api';

export function fetchMealdetails() {
  return axios.get('/meal/:id');
}

export function fetchFilteredMeals() {
  return axios.get(
    '/country/:country/city/:city/meals?minBudget=X&maxBudget=Y&id_hunger=Z&id_fancy=A&allergens=B&avoid_meals=C'
  );
}
