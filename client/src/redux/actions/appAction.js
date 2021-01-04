import {
  ERROR,
  HIDE_LOADER,
  HIDE_LOCAL_LOADER,
  INITIAL,
  SET_MESSAGE,
  SHOW_LOADER,
  SHOW_LOCAL_LOADER,
} from '../types';

export const initialApp = () => ({ type: INITIAL });

export const showLoaded = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const showLocalLoader = () => ({ type: SHOW_LOCAL_LOADER });
export const hideLocalLoader = () => ({ type: HIDE_LOCAL_LOADER });
export const setMessage = (msg) => {
  return { type: SET_MESSAGE, payload: msg };
};
export const errorAction = (error) => ({ type: ERROR, payload: error });
