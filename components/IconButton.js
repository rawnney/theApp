// @flow
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import ButtonWrapper from './ButtonWrapper'
import Icon from './Icon'

type Props = {
  name: string,
  onPress: Function,
  iconStyle?: StyleSheet,
  wrapperStyle?: StyleSheet
}

export default class IconButton extends Component <Props> {
  render (): * {
    let {onPress, iconStyle, wrapperStyle, name} = this.props
    return <ButtonWrapper onPress={onPress} wrapperStyle={[styles.iconButton, wrapperStyle]}>
      <Icon name={name} iconStyle={iconStyle} />
    </ButtonWrapper>
  }
}

export let styles = StyleSheet.create({
  iconButton: {
    padding: 10
  }
})
