// @flow
import * as Redux from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import DefaultState from '../config/DefaultState'
import user from '../reducers/UserReducer'
// import {reduxMiddleware} from './AppNavigator'
import {createStackNavigator} from 'react-navigation' // StackActions
import {connect} from 'react-redux'
import Routes from '../libs/Routes'
import * as NavigationHelper from 'react-navigation-redux-helpers'

const AppNavigator = createStackNavigator(Routes)
const nav = NavigationHelper.createNavigationReducer(AppNavigator)
// Call createReactNavigationReduxMiddleware before reduxifyNavigator
export const reduxMiddleware = NavigationHelper.createReactNavigationReduxMiddleware('Root', state => state.nav)
const reduxifyNavigator = NavigationHelper.reduxifyNavigator(AppNavigator, 'Root')
const mapStateToProps = (state) => ({state: state.nav})
export const AppWithNavigationState = connect(mapStateToProps)(reduxifyNavigator)

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
