// @flow
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import HomeView from './HomeView'
import {createStore} from '../libs/Store'

export default class App extends Component<*> {
  render (): * {
    return <Provider store={createStore()}>
      <HomeView />
    </Provider>
  }
}
