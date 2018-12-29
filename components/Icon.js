// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import FontAwesome from 'react-native-fontawesome'
import commonStyles from '../libs/CommonStyles'
import {primaryTextColor} from '../libs/ColorThemeHelper'
import ScalableText from 'react-native-text'

type Props = {
  name: string,
  iconStyle?: StyleSheet,
  size?: number
}

type State = {}

export default class Icon extends Component<Props, State> {
  render (): React$Element<View> {
    let {iconStyle, name, size} = this.props
    return <ScalableText style={[styles.icon, {color: primaryTextColor()}, size ? {fontSize: size} : {}, iconStyle]}>
      <FontAwesome>
        {name}
      </FontAwesome>
    </ScalableText>
  }
}

export let styles = StyleSheet.create({
  icon: {
    padding: commonStyles.smallSpace,
    fontSize: 20
  }
})
