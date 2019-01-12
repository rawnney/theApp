// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {primaryColor} from '../libs/ColorThemeHelper'
import TheButton from './TheButton'
import TextView from './TextView'
import ButtonWrapper from './ButtonWrapper'
import {goTo} from '../libs/NavigationHelper'
import LoginContainer from '../components/LoginContainer'
import {connect} from 'react-redux'

type Props = {
  navigation: Object
}
type State = {
}

class EnterCredentialsContainer extends Component <Props, State> {
  static routeName = 'EnterCredentialsContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_story_game'))

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      {this.renderLoginButton()}
      <TheButton onPress={this.createAccount} text={'Start game'} style={styles.button} withBorder />}
    </View>
  }

  renderLoginButton = () => {
    return <ButtonWrapper onPress={this.goToLoginContainer}>
      <TextView text='LOGIN' style={styles.loginText} />
    </ButtonWrapper>
  }

  goToLoginContainer = () => {
    let {navigation} = this.props
    goTo(navigation, LoginContainer.routeName)
  }

  createAccount = () => {}
}

export default connect(state => state)(EnterCredentialsContainer)

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    position: 'absolute',
    bottom: 0
  },
  loginText: {
    fontSize: 20
  }
})
