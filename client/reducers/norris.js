import { SET_NORRIS } from '../actions'

const initialState = []

const norrisReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_NORRIS:
      return payload
    default:
      return state
  }
}

export default norrisReducer
