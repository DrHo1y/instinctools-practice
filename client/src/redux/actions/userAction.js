import {
  PARNTER_SIGNIN,
  PARTNER_SIGNIN_CLICK,
  PARTNER_SIGNUP,
  PARTNER_SIGNUP_CLICK,
  SIGN_SIGNIN,
  SIGN_SIGNIN_CLICK,
  SIGN_SIGNIN_ERROR,
  SIGN_SIGNIN_WITH_TOKEN,
  SIGN_SIGNOUT,
  SIGN_SIGNOUT_CLICK,
  SIGN_SIGNUP,
  SIGN_SIGNUP_CLICK,
} from '../types';

export const signupAction = (payload) => ({ type: SIGN_SIGNUP, payload });
export const signinAction = (payload) => ({ type: SIGN_SIGNIN, payload });
export const signinErrorAction = (payload) => ({
  type: SIGN_SIGNIN_ERROR,
  payload,
});
export const signoutAction = () => ({ type: SIGN_SIGNOUT });
export const signupClickAction = (form) => ({ type: SIGN_SIGNUP_CLICK, form });
export const signinClickAction = (form) => ({ type: SIGN_SIGNIN_CLICK, form });
export const signinWithToken = () => ({ type: SIGN_SIGNIN_WITH_TOKEN });
export const signoutClickAction = () => ({ type: SIGN_SIGNOUT_CLICK });

export const partnerSignupAction = (payload) => ({
  type: PARTNER_SIGNUP,
  payload,
});
export const partnerSignupClickAction = (form) => ({
  type: PARTNER_SIGNUP_CLICK,
  form,
});
export const partnerSigninAction = (payload) => ({
  type: PARNTER_SIGNIN,
  payload,
});
export const partnerSigninClickAction = (form) => ({
  type: PARTNER_SIGNIN_CLICK,
  form,
});
