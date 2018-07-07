// @flow
import {NavigationActions} from 'react-navigation'

let {RESET} = NavigationActions

// Navigation
export let goBack = () => ({type: 'Navigation/BACK'})
export let popTo = (component: *) => ({type: RESET, component})
export let popToTop = popTo
export let login = (user: User) => ({type: 'LOGIN', user})
export let logout = () => ({type: 'LOGOUT'})

// Redux
export let updateUser = (user: User) => ({type: 'UPDATE_USER', user})
export let updateState = (state: Object) => ({type: 'UPDATE_STATE', state})
export let updateNavigationState = (navigationState: Object) => ({type: 'updateNavigationState', navigationState})
