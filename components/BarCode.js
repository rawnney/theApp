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
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={3} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={0.5} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={3} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={0.5} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={0.5} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={0.5} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={3} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={1} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={3} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={2} style={[styles.line, {borderColor: disabledColor()}]} />
      <LineBreak vertical verticalWidth={3} style={[styles.line, {borderColor: disabledColor()}]} />
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
