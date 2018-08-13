import 'react-native'
import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'

describe('App', () => {
  it('should be able to run tests', () => {
    expect(1 + 2).toEqual(3)
  })
  it('renders correctly', () => {
    // eslint-disable-next-line
	  const tree = renderer.create(<App />)
  })
})
