// @flow
/* eslint-disable react/jsx-no-bind */
import React, {Component} from 'react'
import {withNavigation} from 'react-navigation'
import ButtonWrapper from './ButtonWrapper'
import Icon from './Icon'
import {ARROW_LEFT} from '../consts/Icons'

type Props = {
  name: string,
  onPress?: Function,
  iconStyle?: StyleSheet,
  wrapperStyle?: StyleSheet,
  navigation: Object
}

class BackButton extends Component <Props> {
  render (): React$Element<*> {
    let {iconStyle, wrapperStyle, name} = this.props
    return <ButtonWrapper onPress={() => { this.props.navigation.goBack() }} wrapperStyle={wrapperStyle}>
      <Icon name={name || ARROW_LEFT} iconStyle={iconStyle} />
    </ButtonWrapper>
  }
}

export default withNavigation(BackButton)
