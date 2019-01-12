// @flow
import colorTheme from '../libs/ColorThemes'
import {METRIC} from '../libs/Consts'
import {SWEDISH} from '../consts/Languages'

let defaultState = {
  colorTheme: colorTheme.maastrichtBlue,
  language: SWEDISH,
  unit: METRIC
}

export default (state: Object = defaultState, action: Object = {}) => {
  switch (action.type) {
    case 'UPDATE_USER': return {...state, ...action.user}
    default: return state
  }
}
