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
    color: colors.black,
    paddingLeft: 10
  },
  headerLeft: <BackButton />
}
