// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {withTitle} from '../consts/NavigationOptions'
import {connect} from 'react-redux'
import ColorThemeView from './ColorThemeView'

type Props = {
  user: User
}

type State = {}

class ColorThemeContainer extends Component<Props, State> {
  static routeName = 'ColorThemeContainer'
  static navigationOptions = getDefaultNavigationOptions(withTitle('title_color_settings'))

  render (): React$Element<View> {
    let {user} = this.props
    return <ColorThemeView user={user} />
  }
}

export default connect(state => state)(ColorThemeContainer)
