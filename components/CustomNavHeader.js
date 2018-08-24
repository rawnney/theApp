// @flow
import colors from '../libs/Colors'
import React, {Component} from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'
import BackButton from './BackButton'
import {themeBgColor, themeTxtColor, themeBarTint} from '../libs/ColorThemeHelper'
import TextView from './TextView'
import {connect} from 'react-redux'
import ExitButton from './ExitButton'
import commonStyles from '../libs/CommonStyles'

type Props = {
  noBackButton?: boolean,
  noExitButton?: boolean,
  headerStyle?: StyleSheet,
  headerTitle?: string
}

type State = {}

class CustomNavHeader extends Component<Props, State> {
  render (): * {
    let {noBackButton, headerTitle, noExitButton, headerStyle} = this.props
    return <View style={[styles.headerStyle, themeBgColor(), headerStyle]}>
      <StatusBar barStyle={themeBarTint()} />
      <View style={styles.headerLeft}>
        {noBackButton ? <View /> : <BackButton />}
      </View>
      {headerTitle ? <TextView langKey={headerTitle} style={[styles.headerTitleStyle, themeTxtColor()]} /> : <View />}
      <View style={styles.headerRight}>
        {noExitButton ? <View style={styles.dummy} /> : <ExitButton />}
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
    height: commonStyles.navbarHeight
  },
  dummy: {
    padding: commonStyles.smallSpace,
    height: 30,
    width: 30
  },
  headerTitleStyle: {
    fontSize: 15,
    top: 10
  },
  headerLeft: {
    top: 10
  },
  headerRight: {
    top: 10
  }
})

export default connect(state => state)(CustomNavHeader)
