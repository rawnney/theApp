// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {doNothing} from '../libs/CommonFunctions'
import {disabledColor} from '../libs/ColorThemeHelper'
import ButtonWrapper from './ButtonWrapper'
import commonStyles from '../libs/CommonStyles'
import TextView from './TextView'
import LineBreak from './LineBreak'

type Props = {
  onPress: Function,
  style?: StyleSheet,
  textStyle?: StyleSheet,
  text?: string,
  langKey?: string,
  disable?: boolean,
  lineBreakTop?: boolean
}

export default class ListButton extends Component<Props> {
  render (): React$Element<View> {
    let {onPress, text, disable, lineBreakTop, langKey, style, textStyle} = this.props
    return <View style={styles.container}>
      {lineBreakTop ? <LineBreak /> : <View />}
      <ButtonWrapper wrapperStyle={[styles.wrapperStyle, style]} onPress={onPress || doNothing()} disable={disable}>
        <TextView style={[styles.text, disable ? {color: disabledColor()} : {}, textStyle]} langKey={langKey} text={text} />
      </ButtonWrapper>
      <LineBreak />
    </View>
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapperStyle: {
    padding: commonStyles.space,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
