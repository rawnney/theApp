// @flow
import React, {Component} from 'react'
import ReactNative, {StyleSheet, View} from 'react-native'
import {themeTxtColorString, themeTxtColor} from '../libs/ColorThemeHelper'
import IconButton from './IconButton'
import {CROSS} from '../consts/Icons'

type Props = {
  onChangeText?: Function,
  style?: StyleSheet,
  placeholder?: string,
  text?: string,
  placeholderColor?: string,
  onFocus?: Function,
  leftIcon?: string,
  rightIcon?: string,
  leftIconPress?: Function,
  rightIconPress?: Function,
  hasXButton?: boolean
}

type State = {
  text: string,
  focused: boolean
}

// NOTE: onChangeTextForParentComp = ({text}: string) => {setState then do something}
export default class TextInput extends Component<Props, State> {
  state = {text: '', focused: false}

  render (): React$Element<*> {
    let {text, style, placeholder, placeholderColor} = this.props
    return <View style={[styles.container, style]}>
      {this.renderLeftIcon()}
      <ReactNative.TextInput
        ref='textInput'
        style={[styles.input, themeTxtColor()]}
        onChangeText={this.onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        onFocus={this.onFocus}
        selectionColor={themeTxtColorString()}
      />
      {this.renderRightIcon()}
    </View>
  }

  renderLeftIcon = () => {
    let {leftIcon} = this.props
    if (!leftIcon) return <View />
    return <IconButton name={leftIcon} onPress={this.onLeftIconPress} />
  }

  renderRightIcon = () => {
    let {rightIcon, hasXButton} = this.props
    if (!rightIcon) return <View />
    return <IconButton name={hasXButton ? CROSS : rightIcon} onPress={this.onRightIconPress} />
  }

  onChangeText = (text: string) => {
    let {onChangeText} = this.props
    this.setState(() => {
      if (onChangeText) onChangeText({text})
    })
  }

  onLeftIconPress = () => {
    let {leftIconPress} = this.props
    if (leftIconPress) leftIconPress()
  }

  onRightIconPress = () => {
    let {rightIconPress, hasXButton} = this.props
    if (hasXButton) this.clearInput()
    if (rightIconPress) rightIconPress()
  }

  clearInput = () => {
    let {textInput} = this.refs
    textInput.clear()
    this.onChangeText('')
  }

  onFocus = () => {
    let {onFocus} = this.props
    this.setState({focused: true})
    if (onFocus) onFocus()
  }
}

export let styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: 20
  }
})
