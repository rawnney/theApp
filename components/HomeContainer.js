// @flow
import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import colors from '../libs/Colors'
import defaultNavHeader from './DefaultNavHeader'
import Button from './Button'

export default class HomeView extends Component<*> {
  static navigationOptions = {
    ...defaultNavHeader
  }

  render (): React$Element<*> {
    /* eslint-disable react/jsx-no-bind */
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>TheApp!</Text>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Button onPress={() => this.props.navigation.navigate('Settings')} title='Settings' style={styles.linkItem} />
            <Button onPress={() => this.props.navigation.navigate('Weather')} title='Weather' style={styles.linkItem} />
          </ScrollView>
        </View>
      </View>
    )
    /* eslint-enable react/jsx-no-bind */
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
  contentContainer: {
    minWidth: '100%'
  },
  linkItem: {
    width: '100%',
    backgroundColor: colors.red,
    color: colors.red
  }
})
