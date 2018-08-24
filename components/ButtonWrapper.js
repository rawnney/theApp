// @flow
import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native'
import {doNothing} from '../libs/CommonFunctions'

type Props = {
  children: *,
  onPress?: Function,
  wrapperStyle?: StyleSheet,
  buttonStyle?: StyleSheet,
  disable?: boolean
}

export default class ButtonWrapper extends Component <Props> {
  render (): * {
    let {onPress, wrapperStyle, disable, children} = this.props
    return <TouchableOpacity
      style={wrapperStyle}
      onPress={disable ? doNothing() : onPress}
      disable={disable}>
      {children}
    </TouchableOpacity>
  }
}
