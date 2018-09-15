// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {borderColor} from '../libs/ColorThemeHelper'

type Props = {
  style?: StyleSheet,
  vertical?: boolean,
  verticalWidth?: number,
  horizontalWidth?: number
}

export default class LineBreak extends Component<Props> {
  render (): React$Element<*> {
    let {style, vertical, verticalWidth, horizontalWidth} = this.props
    return <View style={[vertical ? styles.vertical : styles.horizontal,
      verticalWidth ? {borderLeftWidth: verticalWidth} : {},
      horizontalWidth ? {borderBottomWidth: horizontalWidth} : {},
      {borderColor: borderColor()}, style]} />
  }
}

export let styles = StyleSheet.create({
  line: {
  },
  horizontal: {
    width: '100%',
    borderBottomWidth: 0.5
  },
  vertical: {
    height: '100%',
    borderLeftWidth: 0.5
  }
})
