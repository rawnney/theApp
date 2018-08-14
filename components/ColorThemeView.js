// @flow

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {themeBgColor} from '../libs/ColorThemeHelper'
import commonStyle from '../libs/CommonStyles'
import ListButton from './ListButton'
import Store from '../libs/Store'
import * as Actions from '../libs/Actions'
import colorTheme from '../libs/ColorThemes'

type Props = {
  user: User
}
type State = {
  user: User
}

export default class ColorThemeView extends Component<Props, State> {
  state = {user: this.props.user}
  render (): React$Element<*> {
    return <View style={[styles.container, themeBgColor()]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ListButton onPress={this.whiteOnRed} text='White on red' />
        <ListButton onPress={this.whiteOnBlack} text='White on black' />
        <ListButton onPress={this.blackOnWhite} text='Reset' />
      </ScrollView >
    </View>
  }

  setColorTheme = (colorTheme: Object): Promise<Object> => {
    let {user} = this.state
    return new Promise((resolve, reject) => {
      this.setState({user: {colorTheme: colorTheme}})
      if (!colorTheme) reject(new Error('No colorTheme'))
      resolve(user)
    })
  }

  whiteOnRed = () => {
    let theme = colorTheme.whiteOnRed
    this.setColorTheme(theme)
      .then(() => {
        let {user} = this.state
        return Store.dispatch(Actions.updateUser(user))
      })
  }

  whiteOnBlack = () => {
    let theme = colorTheme.whiteOnBlack
    this.setColorTheme(theme)
      .then(() => {
        let {user} = this.state
        return Store.dispatch(Actions.updateUser(user))
      })
  }

  blackOnWhite = () => {
    let theme = colorTheme.blackOnWhite
    this.setColorTheme(theme)
      .then(() => {
        let {user} = this.state
        return Store.dispatch(Actions.updateUser(user))
      })
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    minWidth: '100%',
    paddingTop: commonStyle.space
  }
})
