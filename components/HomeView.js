// @flow
import React, {Component} from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import colors from '../libs/Colors'
import ListButton from './ListButton'
import WeatherContainer from './WeatherContainer'
import UserSettingsContainer from './UserSettingsContainer'
import CrimesContainer from './CrimesContainer'
import commonStyle from '../libs/CommonStyles'
import {themeBgColor, themeTxtColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'
import {goTo} from '../libs/NavigationHelper'

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
          <ListButton onPress={this.goToUserSettingsContainer} text='Settings' lineBreakTop />
          <ListButton onPress={this.goToWeatherContainer} text='Weather' />
          <ListButton onPress={this.goToCrimesContainer} text='Crimes near you' />
        </ScrollView>
      </View>
    </View>
  }

  goToUserSettingsContainer = () => {
    let {navigation} = this.props
    goTo(navigation, UserSettingsContainer.routeName)
  }

  goToWeatherContainer = () => {
    let {navigation} = this.props
    goTo(navigation, WeatherContainer.routeName)
  }

  goToCrimesContainer = () => {
    let {navigation} = this.props
    goTo(navigation, CrimesContainer.routeName)
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
