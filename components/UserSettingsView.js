// @flow

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import commonStyle from '../libs/CommonStyles'
import ListButton from './ListButton'
import {themeBgColor} from '../libs/ColorThemeHelper'
import {goTo} from '../libs/NavigationHelper'
import ColorThemeContainer from './ColorThemeContainer'

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
        <ListButton onPress={this.colorSettings} text='Color settings' lineBreakTop />
      </ScrollView >
    </View>
  }

  colorSettings = () => {
    let {navigation} = this.props
    goTo(navigation, ColorThemeContainer.routeName)
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
