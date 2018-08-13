// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {themeTxtColorString} from '../libs/ColorThemeHelper'

type Props = {
  style?: StyleSheet
}

export default class LineBreak extends Component<Props> {
  render (): React$Element<*> {
    let {style} = this.props
    return <View style={[styles.lineStyle, {borderColor: themeTxtColorString()}, style]} />
  }
}

export let styles = StyleSheet.create({
  lineStyle: {
    width: '100%',
    borderBottomWidth: 0.5
  }
})
