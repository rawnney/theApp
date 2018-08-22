// @flow
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import FontAwesome from 'react-native-fontawesome'
import commonStyles from '../libs/CommonStyles'
import {themeTxtColor} from '../libs/ColorThemeHelper'
import ScalableText from 'react-native-text'

type Props = {
  name: string,
  iconStyle?: StyleSheet
}

type State = {}

export default class Icon extends Component<Props, State> {
  render (): React$Element<*> {
    let {iconStyle, name} = this.props
    return <ScalableText style={[styles.icon, iconStyle]}>
      <FontAwesome style={[styles.icon, themeTxtColor(), iconStyle]}>
        {name}
      </FontAwesome>
    </ScalableText>
  }
}

export let styles = StyleSheet.create({
  icon: {
    padding: commonStyles.smallSpace,
    fontSize: 14,
    height: 30,
    width: 30
  }
})
