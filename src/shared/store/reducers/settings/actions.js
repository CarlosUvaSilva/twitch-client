import Cookies from 'universal-cookie'

import * as actionTypes from './actionTypes'

const cookies = new Cookies()

export function setPerPageCookie(perPage) {
  cookies.set('perPage', perPage, { path: '/' })
  return {
    type: actionTypes.SET_COOKIE,
    result: { data: { perPage } }
  }
}

export function getPerPageCookie() {
  const perPage = cookies.get('perPage')

  return {
    type: actionTypes.GET_COOKIE,
    result: { data: { perPage } }
  }
}

