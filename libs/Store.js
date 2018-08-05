// @flow
import * as Redux from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import DefaultState from '../config/DefaultState'
import user from '../reducers/UserReducer'
import {NavigationReducer as nav, reduxMiddleware} from './AppNavigator'

const middleware = Redux.applyMiddleware(thunk, promise, reduxMiddleware)
const appReducer = Redux.combineReducers({nav, user})

let STORE = Redux.createStore(
  appReducer,
  DefaultState,
  Redux.compose(middleware)
)

export let createStore = (state: Object = DefaultState) => {
  STORE = Redux.createStore(
    appReducer,
    state,
    Redux.compose(middleware)
  )
  return STORE
}

export default {
  dispatch: (action: Object) => STORE.dispatch(action),
  getState: () => STORE.getState()
}
