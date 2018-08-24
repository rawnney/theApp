// @flow
import React, {Component} from 'react'
import {StyleSheet, View, ActivityIndicator} from 'react-native'
import {themeBgColor, themeTxtColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'

type Props = {
  textStyle?: StyleSheet,
  loadingWrapper?: StyleSheet
}

export default class LoadingScreen extends Component<Props> {
  render (): React$Element<*> {
    let {textStyle, loadingWrapper} = this.props
    return <View style={[styles.wrapper, themeBgColor(), loadingWrapper]}>
      <ActivityIndicator style={styles.indicator} />
      <TextView style={[styles.text, themeTxtColor(), textStyle]} langKey='general_loading' />
    </View>
  }
}

export let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    padding: 30
  },
  text: {
    fontSize: 25
  }
})
