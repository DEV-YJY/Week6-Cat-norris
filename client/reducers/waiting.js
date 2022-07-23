import { SET_CATS, SET_WAIT } from '../actions'

export default function waiting(state = false, action) {
  const { type } = action
  //console.log(state, action)

  switch (type) {
    case SET_CATS:
      return false
    case SET_WAIT:
      return true
    default:
      return state
  }
}
