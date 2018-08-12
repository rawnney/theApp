// @flow
import colors from '../libs/Colors'
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import BackButton from './BackButton'
import {themeBgColor, themeTxtColor} from '../libs/CommonFunctions'
import TextView from './TextView'
import {connect} from 'react-redux'

type Props = {
  noBackButton?: boolean,
  noExitButton?: boolean,
  headerStyle?: StyleSheet,
  headerTitle?: string
}

type State = {}

// NOTE: ExitButtonComponent
class TestNavHeader extends Component<Props, State> {
  render (): * {
    let {noBackButton, headerTitle, noExitButton, headerStyle} = this.props
    return <View style={[styles.headerStyle, themeBgColor(), headerStyle]}>
      <View style={styles.headerLeft}>
        {noBackButton ? <View /> : <BackButton />}
      </View>
      {headerTitle ? <TextView text={headerTitle} style={themeTxtColor()} /> : <View />}
      <View style={styles.headerRight}>
        {noExitButton ? <View /> : <View />}
      </View>
    </View>
  }
}

export let styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: colors.transparent,
    borderBottomColor: colors.transparent,
    elevation: 2,
    height: 50
  },
  headerTitleStyle: {
    fontSize: 14
  },
  headerLeft: {
    top: 10
  },
  headerRight: {
    top: 10
  }
})

export default connect(state => state)(TestNavHeader)
