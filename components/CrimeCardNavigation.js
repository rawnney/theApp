// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {disabledColor, secondaryColor} from '../libs/ColorThemeHelper'
import ButtonWrapper from './ButtonWrapper'
import TextView from './TextView'
import {INFO_CIRCLE} from '../consts/Icons'
import Icon from './Icon'

type Props = {
  onPress: Function,
  titleLangKey?: string,
  title?: string,
  subtitleLangKey?: string,
  subtitle?: string,
  icon?: string,
  disable?: boolean,
  style?: StyleSheet
}

export default class CrimeCardNavigation extends Component<Props> {
  render (): React$Element<*> {
    let {onPress, disable, titleLangKey, title, subtitle, subtitleLangKey, style, icon} = this.props
    return <ButtonWrapper wrapperStyle={[styles.container, {backgroundColor: secondaryColor()}, style]} onPress={onPress} disable={disable}>
      <Icon name={icon || INFO_CIRCLE} size={50} />
      <View style={styles.textWrapper}>
        <TextView style={[styles.title, disable ? {color: disabledColor()} : {}]} langKey={titleLangKey} text={title} />
        <TextView text={subtitle} langKey={subtitleLangKey} />
      </View>
    </ButtonWrapper>
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textWrapper: {
    maxWidth: '60%',
    left: -20
  },
  title: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
