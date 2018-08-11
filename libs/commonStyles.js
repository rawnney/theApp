// @flow
import colors from './Colors'
let space = 15
export default {
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
