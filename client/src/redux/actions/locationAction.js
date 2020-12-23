import { LOCATION_LOAD_CITY, LOCATION_LOAD_CITY_LOADING } from '../types';

export const loadingCityAction = (countryId) => ({ type: LOCATION_LOAD_CITY_LOADING, countryId });
export const loadCityAction = (payload) => ({ type: LOCATION_LOAD_CITY, payload });
