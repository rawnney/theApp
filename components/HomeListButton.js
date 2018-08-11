// @flow
import React, {Component} from 'react'
import {StyleSheet, Text} from 'react-native'
import {doNothing} from '../libs/CommonFunctions'
import colors from '../libs/Colors'
import ButtonWrapper from './ButtonWrapper'
import commonStyles from '../libs/CommonStyles'

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
    return <ButtonWrapper wrapperStyle={styles.wrapperStyle} onPress={onPress || doNothing()} disable={disable} >
      <Text style={styles.text}>{title || 'Title'}</Text>
    </ButtonWrapper>
  }
}

let styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    padding: commonStyles.space,
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
