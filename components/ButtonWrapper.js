// @flow
import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native'
import {doNothing} from '../libs/CommonFunctions'

type Props = {
  children: Array<React$Element<*>> | Object,
  onPress?: Function,
  wrapperStyle?: StyleSheet,
  disable?: boolean,
  onLongPress?: Function
}

export default class ButtonWrapper extends Component <Props> {
  render (): * {
    let {onPress, wrapperStyle, disable, children, onLongPress} = this.props
    return <TouchableOpacity
      style={wrapperStyle}
      onPress={disable ? doNothing() : onPress}
      disable={disable}
      onLongPress={onLongPress}>
      {children}
    </TouchableOpacity>
  }
}
