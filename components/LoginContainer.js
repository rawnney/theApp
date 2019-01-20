// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {goTo} from '../libs/NavigationHelper'
import CreateAccountContainer from '../components/CreateAccountContainer'
import {connect} from 'react-redux'
import EnterCredentialsView from './EnterCredentialsView'
import {USER, LOCK} from '../consts/Icons'

type Props = {
  user: User,
  navigation: Object
}
type State = {
}

class LoginContainer extends Component <Props, State> {
  static routeName = 'LoginContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_story_game'))

  render (): React$Element<View> {
    let {navigation, user} = this.props
    return <EnterCredentialsView
      user={user}
      showCreateAccountButton
      onCreateAccountPress={this.goToCreateAccountContainer}
      onPressNext={this.onPressNext}
      firstPlaceholder='Username'
      secondPlaceholder='Password'
      buttonText='LOGIN'
      firstLeftIcon={USER}
      secondLeftIcon={LOCK}
      secureSecond
      navigation={navigation}
    />
  }

  goToCreateAccountContainer = () => {
    let {navigation} = this.props
    goTo(navigation, CreateAccountContainer.routeName)
  }

  goToLoginContainer = () => {
    let {navigation} = this.props
    goTo(navigation, LoginContainer.routeName)
  }

  onPressNext = () => {}
}

export default connect(state => state)(LoginContainer)
