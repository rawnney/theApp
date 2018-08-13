// @flow
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import FontAwesome from 'react-native-fontawesome'
import commonStyles from '../libs/CommonStyles'
import {themeTxtColor} from '../libs/ColorThemeHelper'

type Props = {
  name: string,
  iconStyle?: StyleSheet
}

type State = {}

export default class Icon extends Component<Props, State> {
  render (): React$Element<*> {
    let {iconStyle, name} = this.props
    return <FontAwesome style={[styles.icon, themeTxtColor(), iconStyle]}>
      {name}
    </FontAwesome>
  }
}

export let styles = StyleSheet.create({
  icon: {
    padding: commonStyles.smallSpace,
    fontSize: 15,
    height: 30,
    width: 30
  }
})
