// @flow
import React, {Component} from 'react'
import {withNavigation, View} from 'react-navigation'
import IconButton from './IconButton'
import {CROSS} from '../consts/Icons'

type Props = {
  name: string,
  onPress?: Function,
  iconStyle?: StyleSheet,
  wrapperStyle?: StyleSheet,
  navigation: Object
}

class ExitButton extends Component <Props> {
  render (): React$Element<View> {
    let {iconStyle, wrapperStyle, name} = this.props
    return <IconButton onPress={this.navigateBack} name={name || CROSS} iconStyle={iconStyle} wrapperStyle={wrapperStyle} />
  }

  navigateBack = () => {
    let {navigation} = this.props
    if (navigation) navigation.popToTop()
  }
}

export default withNavigation(ExitButton)
