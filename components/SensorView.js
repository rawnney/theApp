// @flow

import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {primaryColor} from '../libs/ColorThemeHelper'
import commonStyle from '../libs/CommonStyles'
import NativeSensors from './NativeSensors'

type Props = {}
type State = {}

export default class SensorView extends Component<Props, State> {
  render (): React$Element<*> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <NativeSensors />
    </View>
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    minWidth: '100%',
    paddingTop: commonStyle.space
  }
})
