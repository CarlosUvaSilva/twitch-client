import * as actionTypes from './actionTypes'

export function getStreams(query) {
  let url = 'streams'

  if (query) {
    url += query
  }

  return {
    types: [actionTypes.LOAD_LIST, actionTypes.LOAD_LIST_SUCCESS, actionTypes.LOAD_LIST_FAIL],
    promise: (client) => client.get(url)
  }
}
