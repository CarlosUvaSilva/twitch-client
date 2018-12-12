import Cookies from 'universal-cookie'
import * as actionTypes from './actionTypes'

const cookies = new Cookies()

export function getStreams(query) {
  let url = 'streams'
  const perPage = cookies.get('perPage')

  if (query) {
    url += '?'
    url += query
  }
  if (typeof perPage !== 'undefined' && perPage !== 'undefined') {
    url += query ? `&limit=${perPage}` : `?limit=${perPage}`
  }

  return {
    types: [actionTypes.LOAD_LIST, actionTypes.LOAD_LIST_SUCCESS, actionTypes.LOAD_LIST_FAIL],
    promise: (client) => client.get(url)
  }
}
