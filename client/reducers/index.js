import { combineReducers } from 'redux'

import cats from './cats'
import norris from './norris'
import waiting from './waiting'

export default combineReducers({
  cats,
  norris,
  waiting,
})
