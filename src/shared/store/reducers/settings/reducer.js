import * as actionTypes from './actionTypes'

const initialState = {
  perPage: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SET_COOKIE:
      return {
        ...state,
        perPage: action.result.data.perPage
      }
    case actionTypes.GET_COOKIE:
      return {
        ...state,
        perPage: action.result.data.perPage
      }
    default:
      return state
  }
}
