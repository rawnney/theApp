// @flow
import * as Redux from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import DefaultState from '../config/DefaultState'
import user from '../reducers/UserReducer'
import location from '../reducers/LocationReducer'

let middleware = Redux.applyMiddleware(thunk, promise)

let STORE = Redux.createStore(
  Redux.combineReducers({
    user,
    location
  }),
  DefaultState,
  Redux.compose(middleware)
)

export let createStore = (state: Object = DefaultState) => {
  STORE = Redux.createStore(
    Redux.combineReducers({
      user,
      location
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
