// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {secondaryColor} from '../libs/ColorThemeHelper'
import commonStyles from '../libs/CommonStyles'
import Icon from './Icon'
import {USER} from '../consts/Icons'

type Props = {
  image?: *,
  style?: StyleSheet,
  iconStyle?: StyleSheet
}
type State = {
}

export default class UserImage extends Component <Props, State> {
  render (): React$Element<View> {
    let {image, style, iconStyle} = this.props
    return <View style={[styles.imageStyle, {backgroundColor: secondaryColor()}, style]}>
      <Icon name={image || USER} iconStyle={[styles.iconStyle, iconStyle]} size={80} />
    </View>
  }
}

export let styles = StyleSheet.create({
  imageStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderRadius: 100,
    margin: commonStyles.space
  },
  iconStyle: {
    textAlign: 'center'
  }
})
