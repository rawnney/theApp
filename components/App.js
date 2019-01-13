// @flow
import {Provider} from 'react-redux'
import React, {Component} from 'react'
import {AppWithNavigationState, createStore} from '../libs/Store'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloProvider} from 'react-apollo'
import {GQL_SIMPLE_API_KEY} from '../consts/ApiKeys'

const store = createStore()
const client = new ApolloClient({
  link: new HttpLink({uri: GQL_SIMPLE_API_KEY}),
  cache: new InMemoryCache()
})

export default class App extends Component<*> {
  render (): React$Element<*> {
    return <ApolloProvider client={client}>
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    </ApolloProvider>
  }
}
