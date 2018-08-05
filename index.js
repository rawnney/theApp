// @flow
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import React, {Component} from 'react'
import {AppWithNavigationState} from './libs/AppNavigator'
import {createStore} from './libs/Store'

const store = createStore()

class Root extends Component<*> {
  render (): * {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('theApp', () => Root)
