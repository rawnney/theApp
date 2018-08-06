// @flow
import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import colors from '../libs/Colors'
import defaultNavHeader from './DefaultNavHeader'
import HomeListButton from './HomeListButton'
import {connect} from 'react-redux'
import WeatherContainer from './WeatherContainer'
import UserSettingsContainer from './UserSettingsContainer'
import CrimesNearYouContainer from './CrimesNearYouContainer'
import {goTo} from '../libs/NavigationHelper'

class HomeContainer extends Component<*> {
  static routeName = 'HomeContainer'
  static navigationOptions = {
    ...defaultNavHeader,
    headerLeft: <View />
  }

  render (): React$Element<*> {
    return <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>TheApp</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <HomeListButton onPress={this.goToSettings} title='Settings' />
          <HomeListButton onPress={this.goToWeather} title='Weather' />
          <HomeListButton onPress={this.goToCrimesNearYou} title='Crimes near you' />
        </ScrollView>
      </View>
    </View>
  }

  goToSettings = () => {
    let {navigation} = this.props
    goTo(navigation, UserSettingsContainer.routeName)
  }

  goToWeather = () => {
    let {navigation} = this.props
    goTo(navigation, WeatherContainer.routeName)
  }

  goToCrimesNearYou = () => {
    let {navigation} = this.props
    goTo(navigation, CrimesNearYouContainer.routeName)
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
  }
})

export default connect(state => state)(HomeContainer)
