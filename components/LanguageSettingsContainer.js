// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {withTitle} from '../libs/NavigationOptions'
import {connect} from 'react-redux'
import LanguageSettingsView from './LanguageSettingsView'

type Props = {
  user: User
}

type State = {}

class LanguageSettingsContainer extends Component<Props, State> {
  static routeName = 'LanguageSettingsContainer'
  static navigationOptions = getDefaultNavigationOptions(withTitle('title_language_settings'))

  render (): React$Element<View> {
    let {user} = this.props
    return <LanguageSettingsView user={user} />
  }
}

export default connect(state => state)(LanguageSettingsContainer)
