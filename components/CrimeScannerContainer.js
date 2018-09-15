// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {primaryColor} from '../libs/ColorThemeHelper'
import CrimeCardNavigation from './CrimeCardNavigation'
import CrimeScannerLogo from './CrimeScannerLogo'

type State = {}

type Props = {
  navigation: Object
}

class CrimeScannerContainer extends Component <Props, State> {
  static routeName = 'CrimeScannerContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_crime_scanner'))

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <CrimeScannerLogo style={styles.logo} />
      <CrimeCardNavigation onPress={this.goTo} title={'lol'} subtitle={'heawdawdawdj'} />
      <CrimeCardNavigation onPress={this.goTo} />
      <CrimeCardNavigation onPress={this.goTo} />
      <CrimeCardNavigation onPress={this.goTo} />
    </View>
  }

  goTo = () => {}
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(state => state)(CrimeScannerContainer)
