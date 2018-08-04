// @flow
import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../libs/Colors'

type Props = {
  children?: *,
  onPress?: Function,
  wrapperStyle?: StyleSheet,
  buttonStyle?: StyleSheet,
  disable?: boolean
}

export default class ButtonWrapper extends Component <Props> {
  render (): * {
    let {onPress, wrapperStyle, disable} = this.props
    return (
      <TouchableOpacity
        style={[wrapperStyle, disable ? styles.disabled : undefined]}
        onPress={onPress || this.doNothing}
        disable={disable}>
        {this.props.children}
      </TouchableOpacity>
    )
  }

  doNothing = () => {}
}

export let styles = StyleSheet.create({
  disabled: {
    backgroundColor: colors.gray
  }
})
