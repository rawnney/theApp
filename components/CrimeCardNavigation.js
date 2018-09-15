// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {doNothing} from '../libs/CommonFunctions'
import {disabledColor, secondaryColor} from '../libs/ColorThemeHelper'
import ButtonWrapper from './ButtonWrapper'
import commonStyles from '../libs/CommonStyles'
import TextView from './TextView'
import {BARCODE} from '../consts/Icons'
import Icon from './Icon'

type Props = {
  onPress: Function,
  langKey?: string,
  icon?: string,
  disable?: boolean,
  style?: StyleSheet
}

export default class CrimeCardNavigation extends Component<Props> {
  render (): React$Element<*> {
    let {onPress, disable, langKey, style} = this.props
    return <ButtonWrapper wrapperStyle={[styles.wrapperStyle, {backgroundColor: secondaryColor()}, style]} onPress={onPress || doNothing()} disable={disable}>
      <Icon name={BARCODE} />
      <View>
        <TextView style={[styles.title, disable ? {color: disabledColor()} : {}]} langKey={langKey} text='awdaw' />
        <TextView text='awdawd' />
      </View>
    </ButtonWrapper>
  }
}

let styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: commonStyles.space,
    margin: commonStyles.space,
    justifyContent: 'center',
    alignItems: 'center'
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
