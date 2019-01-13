// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {goTo} from '../libs/NavigationHelper'
import LoginContainer from '../components/LoginContainer'
import {connect} from 'react-redux'
import EnterCredentialsView from './EnterCredentialsView'
import {USER, LOCK} from '../consts/Icons'

type Props = {
  navigation: Object
}
type State = {
}

class CreateAccountContainer extends Component <Props, State> {
  static routeName = 'CreateAccountContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_story_game'))

  render (): React$Element<View> {
    return <EnterCredentialsView
      onLoginPress={this.goToLoginContainer}
      onPressNext={this.onPressNext}
      firstPlaceholder='Username'
      secondPlaceholder='Password'
      buttonText='CREATE ACCOUNT'
      firstLeftIcon={USER}
      secondLeftIcon={LOCK}
      secureSecond
    />
  }

  goToLoginContainer = () => {
    let {navigation} = this.props
    goTo(navigation, LoginContainer.routeName)
  }

  onPressNext = () => {}
}

export default connect(state => state)(CreateAccountContainer)
