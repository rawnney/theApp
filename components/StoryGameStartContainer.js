// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {primaryColor, secondaryColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'
import ButtonWrapper from './ButtonWrapper'
import {goTo} from '../libs/NavigationHelper'
import {connect} from 'react-redux'
import CreateAccountContainer from './CreateAccountContainer'
import LoginContainer from './LoginContainer'
import commonStyles from '../libs/CommonStyles'
import {BOOK} from '../consts/Icons'
import Icon from './Icon'

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
      <View style={[styles.imageStyle, {backgroundColor: secondaryColor()}]}>
        <Icon name={BOOK} iconStyle={[styles.iconStyle]} size={80} />
      </View>
      <TextView text='Hello and welcome to the StoryGame! This is a text-based adventure based on a true story. Are you brave enough to continue? If you are good luck!' style={[styles.introText, styles.centerText]} />
      {this.renderCreateAccountButton()}
      {this.renderLoginButton()}
    </View>
  }

  renderCreateAccountButton = () => {
    return <ButtonWrapper onPress={this.goToCreateAccountContainer}>
      <TextView text='CREATE ACCOUNT' style={[styles.textButton, styles.centerText]} />
    </ButtonWrapper>
  }

  renderLoginButton = () => {
    return <ButtonWrapper onPress={this.goToLoginContainer}>
      <TextView text='LOGIN' style={[styles.textButton, styles.centerText]} />
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
    flex: 1,
    padding: commonStyles.space
  },
  imageStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderRadius: 100,
    margin: commonStyles.space
  },
  iconStyle: {
    textAlign: 'center'
  },
  centerText: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  introText: {
    fontSize: 17,
    marginTop: commonStyles.space
  },
  textButton: {
    fontSize: 20,
    padding: commonStyles.space,
    marginTop: commonStyles.space
  }
})
