import { LOCATION_LOAD_CITY } from '../types';

const initialState = {
  country: '',
  city: [],
};

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_LOAD_CITY:
      return { ...state, city: action.payload.data };
    default:
      return state;
  }
};
