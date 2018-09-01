// @flow

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import commonStyle from '../libs/CommonStyles'
import ListButton from './ListButton'
import {themeBgColor} from '../libs/ColorThemeHelper'
import {goTo} from '../libs/NavigationHelper'
import ColorThemeContainer from './ColorThemeContainer'
import LanguageSettingsContainer from './LanguageSettingsContainer'
import Config from '../libs/Config'

type Props = {
  user: User,
  navigation: Object
}

type State = {
  user: User
}

export default class UserSettingsView extends Component<Props, State> {
  state = {user: this.props.user}
  render (): React$Element<*> {
    return <View style={[styles.container, themeBgColor()]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ListButton onPress={this.colorSettings} langKey='title_color_settings' disable={!Config.enableColorTheme} lineBreakTop />
        <ListButton onPress={this.langSettings} langKey='title_language_settings' disable={!Config.enableLanguageSelection} />
      </ScrollView >
    </View>
  }

  colorSettings = () => {
    let {navigation} = this.props
    goTo(navigation, ColorThemeContainer.routeName)
  }

  langSettings = () => {
    let {navigation} = this.props
    goTo(navigation, LanguageSettingsContainer.routeName)
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
