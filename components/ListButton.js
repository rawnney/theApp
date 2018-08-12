// @flow
import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {doNothing} from '../libs/CommonFunctions'
import colors from '../libs/Colors'
import ButtonWrapper from './ButtonWrapper'
import commonStyles from '../libs/CommonStyles'
import TextView from './TextView'

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
    return <ButtonWrapper wrapperStyle={styles.wrapperStyle} onPress={onPress || doNothing()} disable={disable}>
      <TextView style={[styles.text, disable ? styles.disable : {}]} text={text} />
    </ButtonWrapper>
  }
}

let styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    padding: commonStyles.space,
    marginTop: 0.5,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.gray
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
