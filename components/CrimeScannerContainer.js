// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'

type State = {
}

type Props = {
  navigation: Object
}

class CrimeScannerContainer extends Component <Props, State> {
  static routeName = 'CrimeScannerContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_crime_scanner'))

  render (): React$Element<View> {
    return <View>
      <View />
      <View />
    </View>
  }
}

export default connect(state => state)(CrimeScannerContainer)
