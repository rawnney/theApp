// @flow
import React, {Component} from 'react'
import ReactNative, {StyleSheet, View} from 'react-native'
import {primaryTextColor, keyBoardAppearance, disabledColor} from '../libs/ColorThemeHelper'
import IconButton from './IconButton'
import {CROSS} from '../consts/Icons'

type Props = {
  onChangeText?: Function,
  style?: StyleSheet,
  placeholder?: string,
  text?: string,
  placeholderTextColor?: string,
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

export default class TextInput extends Component<Props, State> {
  state = {text: '', focused: false}

  render (): React$Element<*> {
    let {text, style, placeholder, placeholderTextColor} = this.props
    return <View style={styles.container}>
      {this.renderLeftIcon()}
      <ReactNative.TextInput
        ref='textInput'
        {...this.props}
        style={[styles.input, {color: primaryTextColor()}, style]}
        onChangeText={this.onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || disabledColor()}
        onFocus={this.onFocus}
        selectionColor={primaryTextColor()}
        keyboardAppearance={keyBoardAppearance() || 'default'}
      />
      {this.renderRightIcon()}
    </View>
  }

  renderLeftIcon = () => {
    let {leftIcon} = this.props
    if (!leftIcon) return <View />
    return <IconButton name={leftIcon} onPress={this.onLeftIconPress} wrapperStyle={styles.icon} />
  }

  renderRightIcon = () => {
    let {rightIcon, hasXButton} = this.props
    if (!rightIcon) return <View />
    return <IconButton name={hasXButton ? CROSS : rightIcon} onPress={this.onRightIconPress} wrapperStyle={styles.icon} />
  }

  onChangeText = (text: string) => {
    let {onChangeText} = this.props
    this.setState(() => {
      if (onChangeText) onChangeText(text)
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
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: 17
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
