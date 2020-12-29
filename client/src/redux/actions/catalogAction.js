import { CATALOG_SEARCH_LOCATION, CATALOG_SEARCH_LOCATION_CLICK } from '../types';

export const searchCatalogLocationClickAction = (location) => ({
  type: CATALOG_SEARCH_LOCATION_CLICK,
  location,
});
export const searcCatalogLocationAction = (payload) => ({ type: CATALOG_SEARCH_LOCATION, payload });
