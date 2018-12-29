// @flow
import colorTheme from '../libs/ColorThemes'
import {METRIC, SV} from '../libs/Consts'

let defaultState = {
  colorTheme: colorTheme.maastrichtBlue,
  language: SV,
  unit: METRIC
}

export default (state: Object = defaultState, action: Object = {}) => {
  switch (action.type) {
    case 'UPDATE_USER': return {...state, ...action.user}
    default: return state
  }
}
