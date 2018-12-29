// @flow
import colors from './Colors'
import {STATUS_BAR_LIGHT, KEYBOARD_COLOR_LIGHT, STATUS_BAR_DARK, KEYBOARD_COLOR_DARK} from './Consts'

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

let raisinBlack = {
  langKey: 'color_raisin_black',
  primary: colors.raisinBlack,
  secondary: colors.davysGrey,
  primaryText: colors.alabaster,
  secondaryText: colors.khaki,
  warning: colors.roseTaupe,
  disabled: colors.alabaster05,
  headerBarTint: STATUS_BAR_LIGHT,
  keyboardAppearance: KEYBOARD_COLOR_DARK
}

let almond = {
  langKey: 'color_almond',
  primary: colors.almond,
  secondary: colors.tuscany,
  primaryText: colors.zinnwalditeBrown,
  secondaryText: colors.oldSilver,
  warning: colors.oldRose,
  disabled: colors.zinnwalditeBrown05,
  headerBarTint: STATUS_BAR_DARK,
  keyboardAppearance: KEYBOARD_COLOR_LIGHT
}

let maastrichtBlue = {
  langKey: 'color_maastricht_blue',
  primary: colors.maastrichtBlue,
  secondary: colors.crayola,
  primaryText: colors.babyPowder,
  secondaryText: colors.maximumBlueGreen,
  warning: colors.roseMadder,
  disabled: colors.babyPowder05,
  headerBarTint: STATUS_BAR_LIGHT,
  keyboardAppearance: KEYBOARD_COLOR_DARK
}

let test = {
  langKey: 'color_test',
  primary: colors.test5,
  secondary: colors.test2,
  primaryText: colors.test3,
  secondaryText: colors.test2,
  warning: colors.test4,
  disabled: colors.test1,
  headerBarTint: STATUS_BAR_LIGHT,
  keyboardAppearance: KEYBOARD_COLOR_DARK
}

export default {
  blackAndWhite,
  frenchPlum,
  raisinBlack,
  almond,
  maastrichtBlue,
  test
}
