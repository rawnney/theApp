// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../consts/NavigationOptions'
import UserSettingsView from './UserSettingsView'
import {connect} from 'react-redux'

type Props = {
  user: User,
  navigation: Object
}

type State = {}

class UserSettingsContainer extends Component<Props, State> {
  static routeName = 'UserSettingsContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_settings'))

  render (): React$Element<View> {
    let {user, navigation} = this.props
    return <UserSettingsView user={user} navigation={navigation} />
  }
}

export default connect(state => state)(UserSettingsContainer)
