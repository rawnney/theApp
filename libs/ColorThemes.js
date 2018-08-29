// @flow
import colors from './Colors'
import {STATUS_BAR_LIGHT, STATUS_BAR_DARK, KEYBOARD_COLOR_LIGHT, KEYBOARD_COLOR_DARK, KEYBOARD_COLOR_DEFAULT} from './Consts'
import {COLOR_THEME_DEFAULT, COLOR_THEME_WHITE_ON_BLACK, COLOR_THEME_WHITE_ON_RED} from '../consts/ColorThemes'

let blackOnWhite = {
  name: COLOR_THEME_DEFAULT,
  color: colors.black,
  backgroundColor: colors.white,
  headerBarTint: STATUS_BAR_DARK,
  keyboardAppearance: KEYBOARD_COLOR_LIGHT
}
let whiteOnBlack = {
  name: COLOR_THEME_WHITE_ON_BLACK,
  color: colors.white,
  backgroundColor: colors.black,
  headerBarTint: STATUS_BAR_LIGHT,
  keyboardAppearance: KEYBOARD_COLOR_DARK
}
let whiteOnRed = {
  name: COLOR_THEME_WHITE_ON_RED,
  color: colors.white,
  backgroundColor: colors.red,
  headerBarTint: STATUS_BAR_LIGHT,
  keyboardAppearance: KEYBOARD_COLOR_DEFAULT
}

export default {
  blackOnWhite,
  whiteOnBlack,
  whiteOnRed
}
