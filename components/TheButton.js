// @flow
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import ButtonWrapper from './ButtonWrapper'
import TextView from './TextView'
import commonStyles from '../libs/CommonStyles'
import {themeBgColorString, themeTxtColorString} from '../libs/ColorThemeHelper'

type Props = {
  onPress?: Function,
  disable?: boolean,
  text?: string,
  langKey?: string,
  style?: StyleSheet
}

export default class TheButton extends Component <Props> {
  render (): * {
    let {onPress, disable, text, langKey, style} = this.props
    return <ButtonWrapper onPress={onPress} wrapperStyle={[styles.buttonStyle, {backgroundColor: themeTxtColorString()}, style]} disable={disable} >
      <TextView text={text} langKey={langKey} style={{color: themeBgColorString()}} />
    </ButtonWrapper>
  }
}

export let styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: commonStyles.buttonHeight,
    alignSelf: 'center',
    padding: commonStyles.space,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
