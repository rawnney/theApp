// @flow
import {Provider} from 'react-redux'
import React, {Component} from 'react'
import {AppWithNavigationState, createStore} from '../libs/Store'
import {ApolloProvider} from 'react-apollo'
import {client} from '../libs/ApolloClient'

let store = createStore()

export default class App extends Component<*> {
  render (): React$Element<*> {
    return <ApolloProvider client={client}>
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    </ApolloProvider>
  }
}
