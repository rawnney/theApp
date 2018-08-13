// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {themeBgColor, themeTxtColor} from '../libs/CommonFunctions'
import TextView from './TextView'

type Props = {
  textStyle?: StyleSheet,
  loadingWrapper?: StyleSheet
}

export default class LoadingScreen extends Component<Props> {
  render (): React$Element<*> {
    let {textStyle, loadingWrapper} = this.props
    return <View style={[styles.wrapper, themeBgColor(), loadingWrapper]}>
      <TextView style={[styles.text, themeTxtColor(), textStyle]} text={'Loading...'} />
    </View>
  }
}

export let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
})
