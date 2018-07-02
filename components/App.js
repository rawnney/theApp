// @flow

import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Colors from '../libs/Colors'

export default class App extends Component<*> {
  render (): React$Element<*> {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to TheApp!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
