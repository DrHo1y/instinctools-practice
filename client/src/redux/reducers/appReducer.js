import {
  ERROR,
  HIDE_LOADER,
  HIDE_LOCAL_LOADER,
  LOCATION_LOAD_CITY,
  PARTNER_SIGNUP,
  SHOW_LOADER,
  SHOW_LOCAL_LOADER,
  SIGN_SIGNIN,
  SIGN_SIGNIN_ERROR,
  SIGN_SIGNUP,
} from '../types';

const initialState = {
  languge: 'EN',
  currency: 'USD',
  globalLoading: true,
  loading: false,
  msg: '',
  error: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, globalLoading: true };
    case HIDE_LOADER:
      return { ...state, globalLoading: false };
    case SHOW_LOCAL_LOADER:
      return { ...state, loading: true };
    case HIDE_LOCAL_LOADER:
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
