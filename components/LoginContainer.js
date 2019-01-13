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
import CreateAccountContainer from '../components/CreateAccountContainer'
import {connect} from 'react-redux'

type Props = {
  navigation: Object
}
type State = {
}

class LoginContainer extends Component <Props, State> {
  static routeName = 'LoginContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_story_game'))

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      {this.renderCreateAccountButton()}
      <TheButton onPress={this.login} text='Start game' style={styles.button} withBorder />
    </View>
  }

  renderCreateAccountButton = (): React$Element<View> => {
    return <ButtonWrapper onPress={this.goToCreateAccountContainer}>
      <TextView text='CREATE ACCOUNT' style={styles.createAccount} />
    </ButtonWrapper>
  }

  goToCreateAccountContainer = () => {
    let {navigation} = this.props
    goTo(navigation, CreateAccountContainer.routeName)
  }

  login = () => {}
}

export default connect(state => state)(LoginContainer)

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    position: 'absolute',
    bottom: 0
  },
  createAccount: {
    fontSize: 20
  }
})
