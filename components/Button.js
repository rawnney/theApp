// @flow
import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import colors from '../libs/Colors'

type Props = {
  onPress: Function,
  buttomStyle?: Object,
  title: string,
  disable?: boolean,
  wrapperStyle?: Object
}

export default class Button extends Component<Props> {
  render (): React$Element<*> {
    let {onPress, title, disable, wrapperStyle, buttomStyle} = this.props
    return <View styles={[styles.wrapperStyle, wrapperStyle]}>
      <TouchableOpacity
        style={[styles.button, buttomStyle, disable ? styles.disabled : undefined]}
        onPress={onPress || this.doNothing}
        disable={disable} >
        <Text style={styles.text}>{title || 'Title'}</Text>
      </TouchableOpacity>
    </View>
  }

  doNothing (): * {}
}

let styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: colors.white
  },
  button: {
    padding: 10,
    margin: 5,
    borderBottomWidth: 0.5,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    backgroundColor: colors.gray
  }
})
