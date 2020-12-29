import { CATALOG_SEARCH_LOCATION } from '../types';

const initialState = {
  facilities: [],
};

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_SEARCH_LOCATION:
      return { ...state, facilities: action.payload.data };
    default:
      return state;
  }
};
