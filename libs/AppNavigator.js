// @flow
import {createStackNavigator, NavigationActions} from 'react-navigation' // StackActions
import {connect} from 'react-redux'
import Routes from '../libs/Routes'
import * as NavigationHelper from 'react-navigation-redux-helpers'
import Store from './Store'
import * as Actions from './Actions'
import {delay} from './CommonFunctions'

// let {RESET} = StackActions
let {NAVIGATE} = NavigationActions

const AppNavigator = createStackNavigator(Routes)
export const NavigationReducer = NavigationHelper.createNavigationReducer(AppNavigator)
// Call createReactNavigationReduxMiddleware before reduxifyNavigator
export const reduxMiddleware = NavigationHelper.createReactNavigationReduxMiddleware('Root', state => state.nav)
const reduxifyNavigator = NavigationHelper.reduxifyNavigator(AppNavigator, 'Root')
const mapStateToProps = (state) => ({state: state.nav})
export const AppWithNavigationState = connect(mapStateToProps)(reduxifyNavigator)

export let pop = (): Promise<*> => {
  Store.dispatch(Actions.pop())
  return delay(200)
}

export let goTo = (Component: Object, props?: *): Promise<Object> => navigateTo(NAVIGATE, Component, props)

export let navigateTo = (type: string, Component: Object, params?: Object): Promise<Object> => {
  Store.dispatch({type, routeName: Component.routeName, params: {...params, component: Component}})
  return delay(200)
}
