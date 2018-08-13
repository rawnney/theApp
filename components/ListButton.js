// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {doNothing} from '../libs/CommonFunctions'
import colors from '../libs/Colors'
import ButtonWrapper from './ButtonWrapper'
import commonStyles from '../libs/CommonStyles'
import TextView from './TextView'
import LineBreak from './LineBreak'

type Props = {
  onPress: Function,
  buttomStyle?: Object,
  text: string,
  disable?: boolean,
  wrapperStyle?: Object
}

export default class ListButton extends Component<Props> {
  render (): React$Element<*> {
    let {onPress, text, disable} = this.props
    return <View style={styles.container}>
      <ButtonWrapper wrapperStyle={styles.wrapperStyle} onPress={onPress || doNothing()} disable={disable}>
        <TextView style={[styles.text, disable ? styles.disable : {}]} text={text} />
      </ButtonWrapper>
      <LineBreak />
    </View>
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapperStyle: {
    padding: commonStyles.space,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disable: {
    color: colors.gray
  }
})
