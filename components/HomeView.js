// @flow
import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import {navigationOptions} from 'react-navigation'
import colors from '../libs/Colors'
import defaultNavHeader from './DefaultNavHeader'
import Button from './Button'

export default class HomeView extends Component<*> {
  static navigationOptions = {
    ...defaultNavHeader
  }

  render (): React$Element<*> {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>TheApp!</Text>
          <ScrollView>
            <Button onPress={() => this.props.navigation.navigate('Settings')} title='Settings' style={styles.linkItem} />
            <Button onPress={() => this.props.navigation.navigate('Settings')} title='Settings' style={styles.linkItem} />
            <Button onPress={() => this.props.navigation.navigate('Settings')} title='Settings' style={styles.linkItem} />
            <Button onPress={() => this.props.navigation.navigate('Settings')} title='Settings' style={styles.linkItem} />
          </ScrollView>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  linkItem: {
    width: '100%',
    backgroundColor: colors.red,
    color: colors.red
  }
})
