// @flow
import React, {Component} from 'react'
import ReactNative from 'react-native'
import {themeTxtColorString} from '../libs/ColorThemeHelper'
let {StyleSheet} = ReactNative

type Props = {
  onChangeText?: Function,
  style?: StyleSheet,
  placeholder?: string,
  text?: string,
  placeholderColor?: string
}

type State = {
  text: string,
  focused: boolean
}

// NOTE: onChangeTextForParentComp = ({text}: string) => {setState then do something}
export default class TextInput extends Component<Props, State> {
  state = {text: 'Placeholder', focused: false}

  render (): React$Element<*> {
    let {text, style, placeholder, placeholderColor} = this.props
    return (
      <ReactNative.TextInput
        ref='textInput'
        style={[styles.input, style]}
        onChangeText={this.onChangeText}
        value={this.state.text}
        placeholder={text || placeholder}
        placeholderColor={placeholderColor}
        selectionColor={themeTxtColorString()}
      />
    )
  }

  onChangeText = (text: string) => {
    let {onChangeText} = this.props
    this.setState(() => {
      if (onChangeText) onChangeText({text})
    })
  }
}

export let styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 20,
    height: 30
  }
})
