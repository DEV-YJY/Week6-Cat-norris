import { getCats, getNorris } from '../apis/cats'

export const SET_CATS = 'SET_CATS'
export const SET_NORRIS = 'SET_NORRIS'
export const SET_WAIT = 'SET_WAIT'

export function setCats(cat) {
  return {
    type: SET_CATS,
    payload: cat,
  }
}
export function setNorris(cat) {
  return {
    type: SET_NORRIS,
    payload: cat,
  }
}
export function setWait() {
  return { type: SET_WAIT }
}
export function fetchCats() {
  return (dispatch) => {
    dispatch(setWait())
    return getCats().then((cat) => {
      dispatch(setCats(cat))
      return null
    })
  }
}
export function fetchNorris() {
  return (dispatch) => {
    return getNorris().then((cat) => {
      dispatch(setNorris(cat))
      return null
    })
  }
}
