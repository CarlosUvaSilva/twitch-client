import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import twitch from './twitch/reducer';

export default combineReducers({
  routing: routerReducer,
  twitch
})
