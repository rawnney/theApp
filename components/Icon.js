// @flow
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import FontAwesome from 'react-native-fontawesome'
import colors from '../libs/Colors'

type Props = {
  name: string,
  iconStyle?: StyleSheet
}

type State = {}

export default class Icon extends Component<Props, State> {
  render (): * {
    let {iconStyle, name} = this.props
    return <FontAwesome style={[styles.icon, iconStyle]}>
      {name}
    </FontAwesome>
  }
}

export let styles = StyleSheet.create({
  icon: {
    padding: 10,
    fontSize: 15,
    color: colors.black
  }
})
