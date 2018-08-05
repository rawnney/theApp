// @flow
import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import colors from '../libs/Colors'
import defaultNavHeader from './DefaultNavHeader'
import HomeListButton from './HomeListButton'
import {connect} from 'react-redux'
import WeatherContainer from './WeatherContainer'
import UserSettingsContainer from './UserSettingsContainer'

class HomeContainer extends Component<*> {
  static routeName = 'HomeContainer'
  static navigationOptions = {
    ...defaultNavHeader,
    headerLeft: <View />
  }

  render (): React$Element<*> {
    /* eslint-disable react/jsx-no-bind */
    let {navigation} = this.props
    return <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>TheApp</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <HomeListButton onPress={() => navigation.navigate(UserSettingsContainer.routeName)} title='Settings' style={styles.linkItem} />
          <HomeListButton onPress={() => navigation.navigate(WeatherContainer.routeName)} title='Weather' style={styles.linkItem} />
        </ScrollView>
      </View>
    </View>
    /* eslint-enable react/jsx-no-bind */
  }
}

export let styles = StyleSheet.create({
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

export default connect(state => state)(HomeContainer)
