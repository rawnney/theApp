// @flow

import React, {Component} from 'react'
import {View} from 'react-native'
import defaultNavHeader from './DefaultNavHeader'
import UserSettingsView from './UserSettingsView'

type Props = {}
type State = {}

export default class UserSettingsContainer extends Component<State, Props> {
  static routeName = 'UserSettingsContainer'
  static navigationOptions = {
    ...defaultNavHeader,
    headerTitle: 'Settings'
  }

  render (): React$Element<View> {
    return <UserSettingsView />
  }
}
