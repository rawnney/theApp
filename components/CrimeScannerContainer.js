// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {primaryColor} from '../libs/ColorThemeHelper'
import CrimeCardNavigation from './CrimeCardNavigation'
import CrimeScannerLogo from './CrimeScannerLogo'
import * as Icons from '../consts/Icons'
import CrimesContainer from './CrimesContainer'
import CrimeSearchContainer from './CrimeSearchContainer'
import CrimeDiscussionContainer from './CrimeDiscussionContainer'
import CrimeStatisticsContainer from './CrimeStatisticsContainer'
import {goTo} from '../libs/NavigationHelper'

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
      <CrimeCardNavigation onPress={this.goToCrimesNearYou} icon={Icons.LOCATION_ARROW} title={'Near you'} subtitle={'See all the crimes and incidents around you.'} />
      <CrimeCardNavigation onPress={this.goToCrimeSearch} icon={Icons.SEARCH} title={'Search'} subtitle={'Search for anything! Crimetype, location...'} />
      <CrimeCardNavigation onPress={this.goToCrimeDiscussion} icon={Icons.COMMENT} title={'Discussion'} subtitle={'Talk about whats going on with others'} />
      <CrimeCardNavigation onPress={this.goToCrimeStatistics} icon={Icons.CHART_BAR} title={'Statistics'} subtitle={'Check out the crime-rates and more.'} />
    </View>
  }

  goToCrimesNearYou = () => {
    let {navigation} = this.props
    goTo(navigation, CrimesContainer.routeName)
  }

  goToCrimeSearch = () => {
    let {navigation} = this.props
    goTo(navigation, CrimeSearchContainer.routeName)
  }

  goToCrimeDiscussion = () => {
    let {navigation} = this.props
    goTo(navigation, CrimeDiscussionContainer.routeName)
  }

  goToCrimeStatistics = () => {
    let {navigation} = this.props
    goTo(navigation, CrimeStatisticsContainer.routeName)
  }
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
