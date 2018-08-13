// @flow
import {Provider} from 'react-redux'
import React, {Component} from 'react'
import {AppWithNavigationState, createStore} from '../libs/Store'

const store = createStore()

export default class App extends Component<*> {
  render (): React$Element<*> {
    return <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  }
}
