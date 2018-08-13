// @flow
import colors from './Colors'
import {STATUS_BAR_LIGHT, STATUS_BAR_DARK} from './Consts'

let blackOnWhite = {color: colors.black, backgroundColor: colors.white, headerBarTint: STATUS_BAR_DARK}
let whiteOnBlack = {color: colors.white, backgroundColor: colors.black, headerBarTint: STATUS_BAR_LIGHT}
let whiteOnRed = {color: colors.white, backgroundColor: colors.red, headerBarTint: STATUS_BAR_LIGHT}

export default {
  blackOnWhite,
  whiteOnBlack,
  whiteOnRed
}
