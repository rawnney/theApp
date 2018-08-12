// @flow
import {NavigationActions, StackActions} from 'react-navigation'

let {BACK} = NavigationActions
let {POP_TO_TOP, RESET} = StackActions

// Navigation
export let pop = () => ({type: BACK})
export let popTo = (Component: *, props: *) => ({type: RESET, ...props, ...Component})
export let popToTop = (immediate: *) => ({type: POP_TO_TOP, immediate})

export let login = (user: User) => ({type: 'LOGIN', user})
export let logout = () => ({type: 'LOGOUT'})

// Redux
export let updateUser = (user: User) => ({type: 'UPDATE_USER', user})
export let updatePosition = (position: Object) => ({type: 'UPDATE_POSITION', position})
// export let updateState = (state: Object) => ({type: 'UPDATE_STATE', state})
// export let updateNavigationState = (navigationState: Object) => ({type: 'updateNavigationState', navigationState})
