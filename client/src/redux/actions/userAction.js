import {
  SIGN_SIGNIN,
  SIGN_SIGNIN_CLICK,
  SIGN_SIGNUP,
  SIGN_SIGNUP_CLICK,
} from '../types'

export const signupAction = (payload) => ({ type: SIGN_SIGNUP, payload })
export const signinAction = (payload) => ({ type: SIGN_SIGNIN, payload })
export const signupClickAction = (form) => ({ type: SIGN_SIGNUP_CLICK, form })
export const signinClickAction = (form) => ({ type: SIGN_SIGNIN_CLICK, form })
