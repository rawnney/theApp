// @flow
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import ButtonWrapper from './ButtonWrapper'
import Icon from './Icon'

type Props = {
  icon: string,
  onPress: Function,
  iconStyle?: StyleSheet,
  wrapperStyle?: StyleSheet
}

// export function donothing

export default class IconButton extends Component <Props> {
  render (): * {
    let {onPress, iconStyle, wrapperStyle, icon} = this.props
    return <ButtonWrapper onPress={onPress} wrapperStyle={[styles.iconButton, wrapperStyle]}>
      <Icon name={icon} iconStyle={[styles.iconStyle, iconStyle]} />
    </ButtonWrapper>
  }

  doNothing = () => {}
}

export let styles = StyleSheet.create({
  iconButton: {
    padding: 10
  },
  iconStyle: {
    fontSize: 40,
    color: 'black'
  }
})
