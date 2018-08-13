// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import UserSettingsView from './UserSettingsView'
import {connect} from 'react-redux'

type Props = {
  user: User
}

type State = {}

class UserSettingsContainer extends Component<Props, State> {
  static routeName = 'UserSettingsContainer'
  static navigationOptions = getDefaultNavigationOptions()

  render (): React$Element<View> {
    let {user} = this.props
    return <UserSettingsView user={user} />
  }
}

export default connect(state => state)(UserSettingsContainer)
