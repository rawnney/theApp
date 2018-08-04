// @flow
import React, {Component} from 'react'
import {StyleSheet, Text} from 'react-native'
import colors from '../libs/Colors'
import ButtonWrapper from './ButtonWrapper'

type Props = {
  onPress: Function,
  buttomStyle?: Object,
  title: string,
  disable?: boolean,
  wrapperStyle?: Object
}

export default class HomeListButton extends Component<Props> {
  render (): React$Element<*> {
    let {onPress, title, disable} = this.props
    return <ButtonWrapper wrapperStyle={styles.wrapperStyle} onPress={onPress} disable={disable} >
      <Text style={styles.text}>{title || 'Title'}</Text>
    </ButtonWrapper>
  }

  doNothing = () => {}
}

let styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.gray
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
