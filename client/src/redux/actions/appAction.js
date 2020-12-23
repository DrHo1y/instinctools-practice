import { ERROR, HIDE_LOADER, INITIAL, SHOW_LOADER } from '../types';

export const initialApp = () => ({ type: INITIAL });

export const showLoaded = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const errorAction = (error) => ({ type: ERROR, payload: error });
