// @flow
import React, {Component} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import {doNothing} from '../libs/CommonFunctions'

type Props = {
  children: *,
  onPress?: Function,
  style?: StyleSheet,
  disable?: boolean,
  onLongPress?: Function
}

export default class ButtonWrapper extends Component <Props> {
  render (): * {
    let {onPress, style, disable, children, onLongPress} = this.props
    return <TouchableOpacity
      style={style}
      onPress={disable ? doNothing() : onPress}
      disable={disable}
      onLongPress={onLongPress}>
      {children}
    </TouchableOpacity>
  }
}
