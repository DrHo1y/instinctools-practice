import {
  ERROR,
  HIDE_LOADER,
  LOCATION_LOAD_CITY,
  PARTNER_SIGNUP,
  SHOW_LOADER,
  SIGN_SIGNIN,
  SIGN_SIGNIN_ERROR,
  SIGN_SIGNUP,
} from '../types';

const initialState = {
  languge: 'EN',
  currency: 'USD',
  loading: true,
  msg: '',
  error: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case ERROR:
      return { ...state, error: action.payload.msg };
    case LOCATION_LOAD_CITY:
      return { ...state, msg: action.payload.msg };
    case SIGN_SIGNUP:
      return { ...state, msg: action.payload.msg };
    case SIGN_SIGNIN:
      return { ...state, msg: action.payload.msg };
    case SIGN_SIGNIN_ERROR:
      return { ...state, msg: action.payload.msg };
    case PARTNER_SIGNUP:
      return { ...state, msg: action.payload.msg };
    default:
      return state;
  }
};
