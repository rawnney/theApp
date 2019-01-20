// @flow
import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {secondaryColor} from '../libs/ColorThemeHelper'
import commonStyles from '../libs/CommonStyles'
import Icon from './Icon'
import {USER} from '../consts/Icons'
import ButtonWrapper from './ButtonWrapper'

type Props = {
  user: User,
  style?: StyleSheet,
  iconStyle?: StyleSheet,
  onPress?: Function
}
type State = {
}

export default class UserImage extends Component <Props, State> {
  render (): React$Element<View> {
    let {style} = this.props
    return <ButtonWrapper onPress={this.onPress} style={[styles.imageWrapper, {backgroundColor: secondaryColor()}, style]}>
      {this.renderImageContent()}
    </ButtonWrapper>
  }

  renderImageContent = () => {
    let {user} = this.props
    if (user.profilePic) return <Image source={user.profilePic} style={styles.image} />
    return <Icon name={USER} iconStyle={[styles.iconStyle]} size={80} />
  }

  onPress = () => {
    let {onPress} = this.props
    if (onPress) onPress()
  }
}

export let styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: 160,
    width: 160,
    borderRadius: 100,
    margin: commonStyles.space
  },
  image: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 140,
    width: 140,
    borderRadius: 70,
    transform: [{scaleX: -1}]
  },
  iconStyle: {
    textAlign: 'center'
  }
})
