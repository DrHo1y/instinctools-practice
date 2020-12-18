import { PARNTER_SIGNIN, SIGN_SIGNIN, SIGN_SIGNOUT } from '../types';

const initialState = {
  isAuth: false,
  isPartner: false,
  currentUser: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_SIGNIN:
      return { ...state, isAuth: true, currentUser: action.payload.user };
    case SIGN_SIGNOUT:
      return { ...state, isAuth: false, isPartner: false, currentUser: {} };
    case PARNTER_SIGNIN:
      return {
        ...state,
        isAuth: true,
        isPartner: true,
        currentUser: action.payload.user,
      };
    default:
      return state;
  }
};
