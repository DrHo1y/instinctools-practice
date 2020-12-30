import {
  CATALOG_LOADING_PAGE,
  CATALOG_SEARCH_LOCATION,
  CATALOG_SEARCH_LOCATION_CLICK,
} from '../types';

export const searchCatalogLocationClickAction = (location) => {
  return {
    type: CATALOG_SEARCH_LOCATION_CLICK,
    location,
  };
};
export const searcCatalogLocationAction = (payload) => ({ type: CATALOG_SEARCH_LOCATION, payload });
export const loadCatalogPage = () => ({ type: CATALOG_LOADING_PAGE });
