// @flow
import React, {Component} from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import colors from '../libs/Colors'
import ListButton from './ListButton'
import WeatherContainer from './WeatherContainer'
import UserSettingsContainer from './UserSettingsContainer'
import CrimesContainer from './CrimesContainer'
import SensorContainer from './SensorContainer'
import commonStyle from '../libs/CommonStyles'
import {themeBgColor, themeTxtColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'
import {goTo} from '../libs/NavigationHelper'
import Config from '../libs/Config'

type Props = {
  navigation: Object
}

type State = {}

export default class HomeView extends Component<Props, State> {
  render (): React$Element<*> {
    return <View style={[styles.container, themeBgColor()]}>
      <View style={styles.wrapper}>
        <TextView text={'TheApp'} style={[styles.title, themeTxtColor()]} />
        <ScrollView contentContainerStyle={[styles.contentContainer]}>
          <ListButton onPress={this.goToWeatherContainer} text='Weather' lineBreakTop />
          <ListButton onPress={this.goToCrimesContainer} text='Crimes near you' />
          <ListButton onPress={this.goToSensorContainer} text='Sensors' disable={!Config.enableSensors} />
          <ListButton onPress={this.goToUserSettingsContainer} text='Settings' />
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

  goToSensorContainer = () => {
    let {navigation} = this.props
    goTo(navigation, SensorContainer.routeName)
  }

  goToUserSettingsContainer = () => {
    let {navigation} = this.props
    goTo(navigation, UserSettingsContainer.routeName)
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
    margin: commonStyle.space
  },
  contentContainer: {
    minWidth: '100%'
  }
})
