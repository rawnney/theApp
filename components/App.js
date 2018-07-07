// @flow
import React, {Component} from 'react'
// import {Provider} from 'react-redux'
// import {createStore} from '../libs/Store'
import {createStackNavigator} from 'react-navigation'
import routes from '../libs/Routes'

const AppNavigator = createStackNavigator(routes)
// <Provider store={createStore()}>
// </Provider>
export default class App extends Component<*> {
  render (): * {
    return <AppNavigator />
  }
}
