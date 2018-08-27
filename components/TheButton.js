// @flow
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import ButtonWrapper from './ButtonWrapper'
import TextView from './TextView'
import commonStyles from '../libs/CommonStyles'
import {themeBorderColor} from '../libs/ColorThemeHelper'

type Props = {
  onPress?: Function,
  disable?: boolean,
  text?: string,
  langKey?: string,
  style?: StyleSheet,
  withBorder?: boolean
}

export default class TheButton extends Component <Props> {
  render (): * {
    let {onPress, disable, text, langKey, style, withBorder} = this.props
    return <ButtonWrapper onPress={onPress} wrapperStyle={[styles.buttonStyle, withBorder ? themeBorderColor() : undefined, style]} disable={disable} >
      <TextView text={text} langKey={langKey} />
    </ButtonWrapper>
  }
}

export let styles = StyleSheet.create({
  buttonStyle: {
    width: '70%',
    height: commonStyles.buttonHeight,
    alignSelf: 'center',
    padding: commonStyles.space,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
