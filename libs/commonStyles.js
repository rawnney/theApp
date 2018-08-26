// @flow
import colors from './Colors'
import {isIOS} from './CommonFunctions'
import {Dimensions} from 'react-native'

let window = Dimensions.get('window')
let windowWidth = window.width
let windowHeight = window.height
let navbarHeight = isIOS() ? 45 : 56
let space = 15
export default {
  windowWidth,
  windowHeight,
  navbarHeight,
  space,
  smallSpace: space / 2,
  headerTitleStyle: {
    fontSize: 20,
    color: colors.black,
    paddingLeft: 10
  },
  headerStyle: {
    justifyContent: 'center',
    shadowColor: colors.transparent,
    elevation: 2,
    backgroundColor: colors.white,
    borderBottomColor: colors.transparent
  }
}
