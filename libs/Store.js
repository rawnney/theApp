// @flow
import * as Redux from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import DefaultState from '../config/DefaultState'
import user from '../reducers/UserReducer'

var middleware = Redux.applyMiddleware(thunk, promise)

let STORE = Redux.createStore(
  Redux.combineReducers({
    user
  }),
  DefaultState,
  Redux.compose(middleware)
)

export let createStore = (state: Object = DefaultState) => {
  STORE = Redux.createStore(
    Redux.combineReducers({
      user
    }),
    state,
    Redux.compose(middleware)
  )
  return STORE
}
export default {
  dispatch: (action: Object) => STORE.dispatch(action),
  getState: () => STORE.getState()
}
