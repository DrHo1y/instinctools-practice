import {
  ERROR,
  HIDE_LOADER,
  HIDE_LOCAL_LOADER,
  SET_MESSAGE,
  SHOW_LOADER,
  SHOW_LOCAL_LOADER,
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
    case SET_MESSAGE:
      return { ...state, msg: action.payload };
    case ERROR:
      return { ...state, error: action.payload.msg };
    default:
      return state;
  }
};
