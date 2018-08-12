// @flow
import colors from '../libs/Colors'
import React from 'react'
import BackButton from './BackButton'

export default {
  headerStyle: {
    shadowColor: colors.transparent,
    backgroundColor: colors.white,
    borderBottomColor: colors.transparent,
    elevation: 2
  },
  headerTitleStyle: {
    fontSize: 14,
    color: colors.black
  },
  headerLeft: <BackButton />
}

// NOTE: MAKE THIS WORK

// export let defaultNavHeader = (user: Object): Object => {
//   return {
//     headerStyle: {
//       shadowColor: colors.transparent,
//       backgroundColor: user.colorTheme.backgroundColor,
//       borderBottomColor: colors.transparent,
//       elevation: 2
//     },
//     headerTitleStyle: {
//       fontSize: 14,
//       color: user.colorTheme.colors
//     },
//     headerLeft: <BackButton />
//   }
// }
