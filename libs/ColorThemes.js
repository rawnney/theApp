// @flow
import colors from './Colors'
import {STATUS_BAR_LIGHT, STATUS_BAR_DARK} from './Consts'

let blackOnWhite = {name: 'Default', color: colors.black, backgroundColor: colors.white, headerBarTint: STATUS_BAR_DARK}
let whiteOnBlack = {name: 'White on black', color: colors.white, backgroundColor: colors.black, headerBarTint: STATUS_BAR_LIGHT}
let whiteOnRed = {name: 'White on red', color: colors.white, backgroundColor: colors.red, headerBarTint: STATUS_BAR_LIGHT}

export default {
  blackOnWhite,
  whiteOnBlack,
  whiteOnRed
}
