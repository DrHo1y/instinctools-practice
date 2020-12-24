import { FACILITY_LOAD_FOR_PARTNER } from '../types';

const initialState = {
  facilities: [],
};

export const partnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACILITY_LOAD_FOR_PARTNER:
      return { ...state, facilities: action.payload.data };
    default:
      return state;
  }
};
