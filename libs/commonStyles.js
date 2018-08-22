// @flow
import colors from './Colors'
import {isIOS} from './CommonFunctions'
var navbarHeight = isIOS() ? 45 : 56
let space = 15
export default {
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
