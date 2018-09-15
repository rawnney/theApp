// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {primaryTextColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'
import commonStyles from '../libs/CommonStyles'
import BarCode from './BarCode'

type State = {}
type Props = {
  style?: StyleSheet
}

export default class CrimeScannerLogo extends Component <Props, State> {
  render (): React$Element<View> {
    let {style} = this.props
    return <View style={[styles.container, style]}>
      <BarCode />
      <TextView text='Crime Scanner' style={[styles.logo, {color: primaryTextColor()}]} />
    </View>
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  logo: {
    fontSize: 25,
    paddingTop: commonStyles.space,
    justifyContent: 'center',
    alignItems: 'center',
    top: -7
  }
})
