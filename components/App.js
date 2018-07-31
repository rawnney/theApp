// @flow
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from '../libs/Store'
import {createStackNavigator} from 'react-navigation'
import routes from '../libs/Routes'
// import {createNavigationPropConstructor} from 'react-navigation-redux-helpers'
//
// const navigationPropConstructor = createNavigationPropConstructor('root')
// const navigation = navigationPropConstructor(this.props.dispatch, this.props.appNavigation)

const AppNavigator = createStackNavigator(routes)

export default class App extends Component<*> {
  render (): * {
    return <Provider store={createStore()}>
      <AppNavigator />
    </Provider>
  }
}
