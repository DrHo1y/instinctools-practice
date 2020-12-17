import { SIGN_SIGNIN, SIGN_SIGNIN_ERROR, SIGN_SIGNUP } from '../types';

const initialState = {
  languge: 'EN',
  currency: 'USD',
  loading: false,
  msg: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_SIGNUP:
      return { ...state, msg: action.payload.msg };
    case SIGN_SIGNIN:
      return { ...state, msg: action.payload.msg };
    case SIGN_SIGNIN_ERROR:
      return { ...state, msg: action.payload.msg };
    default:
      return state;
  }
};
