// @flow
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from '../libs/Store'
import {createStackNavigator} from 'react-navigation'
import routes from '../libs/Routes'

const AppNavigator = createStackNavigator(routes)

export default class App extends Component<*> {
  render (): * {
    return <Provider store={createStore()}>
      <AppNavigator />
    </Provider>
  }
}
