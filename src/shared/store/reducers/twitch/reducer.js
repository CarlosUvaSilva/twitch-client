import * as actionTypes from './actionTypes'

const initialState = {
  listLoading: false,
  list: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOAD_LIST:
      return {
        ...state,
        listLoading: true,
      }
    case actionTypes.LOAD_LIST_SUCCESS:
      return {
        ...state,
        listLoading: false,
        list: action.result.streams,
      }
    case actionTypes.LOAD_LIST_FAIL:
      return {
        ...state,
        listLoading: false,
        error: action.error
      }
    case actionTypes.RESET: {
      return initialState
    }
    default:
      return state
  }
}
