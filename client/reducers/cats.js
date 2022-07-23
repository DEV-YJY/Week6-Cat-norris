import { SET_CATS } from '../actions'

const initialState = []

const catReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CATS:
      return payload
    default:
      return state
  }
}

export default catReducer
