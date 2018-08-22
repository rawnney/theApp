// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {themeTxtColor} from '../libs/ColorThemeHelper'
import ScalableText from 'react-native-text'
import Fonts from '../libs/Fonts'

type Props = {
  text?: string | number,
  style?: StyleSheet
}

export default class TextView extends Component <Props> {
  render (): React$Element<View> {
    let {style, text} = this.props
    return <View>
      <ScalableText style={[styles.text, themeTxtColor(), style]}>
        {text}
      </ScalableText>
    </View>
  }
}

export let styles = StyleSheet.create({
  text: {
    ...Fonts.regular
  }
})
