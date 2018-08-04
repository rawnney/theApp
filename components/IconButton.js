// @flow
import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, Image} from 'react-native'

type Props = {
  onPress: Function,
  icon?: string,
  iconStyle?: Object,
  buttonStyle?: Object
}

// export function donothing

export default class IconButton extends Component <Props> {
  render (): * {
    let {onPress, iconStyle, buttonStyle, icon} = this.props
    return (
      <TouchableOpacity style={[styles.backbutton, buttonStyle]} onPress={onPress || this.doNothing}>
        <Image name={icon} style={[styles.backIcon, iconStyle]} />
      </TouchableOpacity>
    )
  }

  doNothing (): * {}
}

var styles = StyleSheet.create({
  backbutton: {
    padding: 20
  },
  backIcon: {
    fontSize: 30,
    color: 'black'
  }
})
