/**
 * @jest-environment jsdom
 */
import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'


import { fetchCats } from '../actions'
jest.mock('../actions')
const fakestore = {
  getState: jest.fn(()=>{return {}}),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

fetchCats.mockImplementation(() => () => {})
describe('getCats', () => {
  test('page header include cat norris', () => {
    render(<Provider store={fakestore}><App /></Provider>)
    
    const heading = screen.getAllByRole('heading')
    expect(heading[0].innerHTML).toMatch(/Cat Norris/)
  })

})

// jest.spyOn(store, 'getState')
// store.getState.mockImplementation(() => ({ fruits }))