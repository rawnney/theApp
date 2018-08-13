// @flow
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {themeTxtColor} from '../libs/ColorThemeHelper'

type Props = {
  text?: string | number,
  style?: StyleSheet
}

export default class TextView extends Component <Props> {
  render (): React$Element<View> {
    let {style, text} = this.props
    return <View>
      <Text style={[themeTxtColor(), style]}>
        {text}
      </Text>
    </View>
  }
}
