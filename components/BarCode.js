// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {disabledColor} from '../libs/ColorThemeHelper'
import LineBreak from './LineBreak'

type State = {}

type Props = {
  style?: StyleSheet
}

export default class BarCode extends Component <Props, State> {
  render (): React$Element<View> {
    let {style} = this.props
    return <View style={[styles.container, style]}>
      {Array(30).fill(0).map((item, index) => <LineBreak key={index} vertical verticalWidth={Math.floor(Math.random() * 3)} style={[styles.line, {borderColor: disabledColor()}]} />)}
    </View>
  }
}

export let styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    height: 40
  },
  line: {
    paddingRight: 4
  }
})
