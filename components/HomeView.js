// @flow
import React, {Component} from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import ListButton from './ListButton'
import WeatherContainer from './WeatherContainer'
import UserSettingsContainer from './UserSettingsContainer'
import CrimesContainer from './CrimesContainer'
import CrimeScannerContainer from './CrimeScannerContainer'
import SensorContainer from './SensorContainer'
import MinesweeperContainer from './MinesweeperContainer'
import commonStyle from '../libs/CommonStyles'
import {primaryColor, primaryTextColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'
import {goTo} from '../libs/NavigationHelper'
import Config from '../libs/Config'
import Fonts from '../libs/Fonts'

type Props = {
  navigation: Object
}

type State = {}

export default class HomeView extends Component<Props, State> {
  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <View style={styles.wrapper}>
        <TextView text={'TheApp'} style={[styles.title, {color: primaryTextColor()}]} />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <ListButton onPress={this.goToWeatherContainer} langKey={'title_weather'} lineBreakTop />
          <ListButton onPress={this.goToCrimesContainer} langKey={'title_crimes_near_you'} />
          <ListButton onPress={this.goToCrimeScannerContainer} langKey={'title_crime_scanner'} />
          <ListButton onPress={this.goToSensorContainer} langKey={'title_sensors'} disable={!Config.enableSensors} />
          <ListButton onPress={this.goToMinesweeperContainer} langKey={'title_minesweeper'} />
          <ListButton onPress={this.goToUserSettingsContainer} langKey={'title_settings'} />
        </ScrollView>
      </View>
    </View>
  }

  goToWeatherContainer = () => {
    let {navigation} = this.props
    goTo(navigation, WeatherContainer.routeName)
  }

  goToCrimesContainer = () => {
    let {navigation} = this.props
    goTo(navigation, CrimesContainer.routeName)
  }

  goToCrimeScannerContainer = () => {
    let {navigation} = this.props
    goTo(navigation, CrimeScannerContainer.routeName)
  }

  goToSensorContainer = () => {
    let {navigation} = this.props
    goTo(navigation, SensorContainer.routeName)
  }

  goToMinesweeperContainer = () => {
    let {navigation} = this.props
    goTo(navigation, MinesweeperContainer.routeName)
  }

  goToUserSettingsContainer = () => {
    let {navigation} = this.props
    goTo(navigation, UserSettingsContainer.routeName)
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...Fonts.bold,
    fontSize: 30,
    margin: commonStyle.space,
    paddingBottom: commonStyle.space
  },
  contentContainer: {
    minWidth: '100%'
  }
})
