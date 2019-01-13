// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {primaryColor} from '../libs/ColorThemeHelper'
import TheButton from './TheButton'
import TextView from './TextView'
import ButtonWrapper from './ButtonWrapper'
import TextInput from './TextInput'
import commonStyles from '../libs/CommonStyles'
import UserImage from './UserImage'

type Props = {
  onPressNext: Function,
  buttonText: string,
  showCreateAccountButton?: boolean,
  onCreateAccountPress?: Function,
  onLoginPress?: Function,
  firstPlaceholder?: string,
  secondPlaceholder?: string,
  firstLeftIcon?: string,
  secondLeftIcon?: string,
  secureFirst?: boolean,
  secureSecond?: boolean,
  image?: *
}
type State = {
}

export default class EnterCredentialsView extends Component <Props, State> {
  render (): React$Element<View> {
    let {showCreateAccountButton, firstPlaceholder, secondPlaceholder, buttonText, firstLeftIcon, secondLeftIcon, secureFirst, secureSecond, image} = this.props
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <UserImage image={image} />
      <View>
        <TextInput
          placeholder={firstPlaceholder}
          style={styles.textInput}
          leftIcon={firstLeftIcon}
          secureTextEntry={secureFirst}
        />
        <TextInput
          placeholder={secondPlaceholder}
          style={styles.textInput}
          leftIcon={secondLeftIcon}
          secureTextEntry={secureSecond}
        />
      </View>
      {showCreateAccountButton ? this.renderCreateAccountButton() : this.renderLoginButton()}
      <TheButton onPress={this.onPressNext} text={buttonText} />
    </View>
  }

  renderCreateAccountButton = (): React$Element<View> => {
    return <ButtonWrapper onPress={this.onCreateAccountPress} style={styles.textButton}>
      <TextView text='CREATE ACCOUNT' style={styles.text} />
    </ButtonWrapper>
  }

  renderLoginButton = (): React$Element<View> => {
    return <ButtonWrapper onPress={this.onLoginPress} style={styles.textButton}>
      <TextView text='LOGIN' style={styles.text} />
    </ButtonWrapper>
  }

  onCreateAccountPress = () => {
    let {onCreateAccountPress} = this.props
    if (onCreateAccountPress) onCreateAccountPress()
  }

  onLoginPress = () => {
    let {onLoginPress} = this.props
    if (onLoginPress) onLoginPress()
  }

  onPressNext = () => {
    let {onPressNext} = this.props
    if (onPressNext) onPressNext()
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 17
  },
  textButton: {
    alignItems: 'center',
    padding: commonStyles.space,
    marginBottom: commonStyles.space * 2
  },
  textInput: {
    padding: commonStyles.space,
    paddingLeft: commonStyles.smallSpace
  }
})
