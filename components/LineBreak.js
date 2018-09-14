// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {borderColor} from '../libs/ColorThemeHelper'

type Props = {
  style?: StyleSheet,
  vertical?: boolean
}

export default class LineBreak extends Component<Props> {
  render (): React$Element<*> {
    let {style, vertical} = this.props
    return <View style={[vertical ? styles.vertical : styles.horizontal, {borderColor: borderColor()}, style]} />
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
