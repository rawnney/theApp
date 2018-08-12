// @flow
import colorTheme from '../libs/ColorThemes'

let defaultState = {
  colorTheme: colorTheme.blackOnWhite
}

export default (state: Object = defaultState, action: Object = {}) => {
  switch (action.type) {
    case 'UPDATE_USER': return action.user
    case 'UPDATE_POSITION': return action.position
    default: return state
  }
}
