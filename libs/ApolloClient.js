// @flow
import {GQL_SIMPLE_API_KEY} from '../consts/ApiKeys'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

const fetch = require('node-fetch')

export let client = new ApolloClient({
  link: new HttpLink({uri: GQL_SIMPLE_API_KEY, fetch: fetch}),
  cache: new InMemoryCache()
})
