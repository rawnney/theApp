// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {themeBgColor} from '../libs/ColorThemeHelper'

type Props = {
}

type State = {
}

export default class MinesweeperView extends Component <Props, State> {
  state = {}

  render (): React$Element<View> {
    return <View style={[styles.container, themeBgColor()]}>
      <View />
    </View>
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
