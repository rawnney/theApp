// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {primaryColor, primaryTextColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'
import commonStyles from '../libs/CommonStyles'

type State = {
}

type Props = {
  navigation: Object
}

class CrimeScannerContainer extends Component <Props, State> {
  static routeName = 'CrimeScannerContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_crime_scanner'))

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <TextView text='CrimeScaner logo' style={[styles.logo, {color: primaryTextColor()}]} />
      <View style={styles.crimesNearYou} />
      <View style={styles.crimeSearch} />
    </View>
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    paddingTop: commonStyles.space * 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  crimesNearYou: {
    flex: 1,
    marginTop: commonStyles.buttonHeight,
    marginBottom: commonStyles.buttonHeight
  },
  crimeSearch: {
    flex: 1,
    marginBottom: commonStyles.buttonHeight
  }
})

export default connect(state => state)(CrimeScannerContainer)
