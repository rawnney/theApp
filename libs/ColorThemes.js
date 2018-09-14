// @flow
import colors from './Colors'
import {STATUS_BAR_LIGHT, KEYBOARD_COLOR_LIGHT} from './Consts' // STATUS_BAR_DARK, STATUS_BAR_LIGHT, KEYBOARD_COLOR_DARK, KEYBOARD_COLOR_DEFAULT

let blackAndWhite = {
  langKey: 'color_black_and_white',
  primary: colors.white,
  secondary: colors.gray,
  primaryText: colors.black,
  secondaryText: colors.black,
  warning: colors.black,
  disabled: colors.black05,
  headerBarTint: STATUS_BAR_LIGHT,
  keyboardAppearance: KEYBOARD_COLOR_LIGHT
}

let frenchPlum = {
  langKey: 'color_french_plum',
  primary: colors.frenchPlum,
  secondary: colors.mediumRuby,
  primaryText: colors.lightCyan,
  secondaryText: colors.paleRobinEggBlue,
  warning: colors.lightSalmonPink,
  disabled: colors.lightCyan05,
  headerBarTint: STATUS_BAR_LIGHT,
  keyboardAppearance: KEYBOARD_COLOR_LIGHT
}

export default {
  blackAndWhite,
  frenchPlum
}
