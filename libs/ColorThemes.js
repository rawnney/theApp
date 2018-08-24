// @flow
import colors from './Colors'
import {STATUS_BAR_LIGHT, STATUS_BAR_DARK} from './Consts'

let blackOnWhite = {name: 'color_theme_default', color: colors.black, backgroundColor: colors.white, headerBarTint: STATUS_BAR_DARK}
let whiteOnBlack = {name: 'color_theme_white_on_black', color: colors.white, backgroundColor: colors.black, headerBarTint: STATUS_BAR_LIGHT}
let whiteOnRed = {name: 'color_theme_white_on_red', color: colors.white, backgroundColor: colors.red, headerBarTint: STATUS_BAR_LIGHT}

export default {
  blackOnWhite,
  whiteOnBlack,
  whiteOnRed
}
