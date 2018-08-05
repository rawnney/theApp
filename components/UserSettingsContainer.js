// @flow

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {navigationOptions} from 'react-navigation'
import defaultNavHeader from './DefaultNavHeader'
import colors from '../libs/Colors'

export default class UserSettingsContainer extends Component<*> {
  static navigationOptions = {
    ...defaultNavHeader,
    headerTitle: 'Settings'
  }

  render (): * {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>This is the settings</Text>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10
  }
})
