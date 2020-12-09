import { CLICK, FETCH } from '../types'

const initialState = {
  languge: 'EN',
  currency: 'USD',
  loading: false,
  data: [],
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK:
      return { ...state, loading: true }
    case FETCH:
      return { ...state, data: state.data.concat(action.payload) }
    default:
      return state
  }
}
