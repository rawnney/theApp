// @flow

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {primaryColor} from '../libs/ColorThemeHelper'
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
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ListButton onPress={this.setThemeToBlackAndWhite} langKey={colorTheme.blackAndWhite.langKey} style={styles.blackAndWhite} textStyle={styles.blackAndWhiteText} />
        <ListButton onPress={this.setThemeToFrenchPlum} langKey={colorTheme.frenchPlum.langKey} style={styles.frenchPlum} textStyle={styles.frenchPlumText} />
      </ScrollView>
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

  setThemeToBlackAndWhite = () => {
    let theme = colorTheme.blackAndWhite
    this.setColorTheme(theme)
      .then(() => {
        let {user} = this.state
        return Store.dispatch(Actions.updateUser(user))
      })
  }

  setThemeToFrenchPlum = () => {
    let theme = colorTheme.frenchPlum
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
  },
  blackAndWhite: {
    backgroundColor: colorTheme.blackAndWhite.primary
  },
  blackAndWhiteText: {
    color: colorTheme.blackAndWhite.primaryText
  },
  frenchPlum: {
    backgroundColor: colorTheme.frenchPlum.primary
  },
  frenchPlumText: {
    color: colorTheme.frenchPlum.primaryText
  }
})
