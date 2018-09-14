// @flow
import colorTheme from '../libs/ColorThemes'

let defaultState = {
  colorTheme: colorTheme.frenchPlum,
  language: 'en',
  unit: 'imperial'
}

export default (state: Object = defaultState, action: Object = {}) => {
  switch (action.type) {
    case 'UPDATE_USER': return {...state, ...action.user}
    default: return state
  }
}
