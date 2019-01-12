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
import {connect} from 'react-redux'
import CreateAccountContainer from './CreateAccountContainer'
import LoginContainer from './LoginContainer'

type Props = {
  navigation: Object
}
type State = {
}

class StoryGameStartContainer extends Component <Props, State> {
  static routeName = 'StoryGameStartContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_story_game'))

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <TextView text='Hello welcome to StoryGame!' />
      {this.renderCreateAccountButton()}
      <TheButton onPress={this.goToLoginContainer} text={'LOGIN'} style={styles.button} withBorder />}
    </View>
  }

  renderCreateAccountButton = () => {
    return <ButtonWrapper onPress={this.goToCreateAccountContainer}>
      <TextView text='CREATE ACCOUNT' style={styles.createAccount} />
    </ButtonWrapper>
  }

  goToCreateAccountContainer = () => {
    let {navigation} = this.props
    goTo(navigation, CreateAccountContainer.routeName)
  }

  goToLoginContainer = () => {
    let {navigation} = this.props
    goTo(navigation, LoginContainer.routeName)
  }
}

export default connect(state => state)(StoryGameStartContainer)

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
