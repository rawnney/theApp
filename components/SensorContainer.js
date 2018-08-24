// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import SensorView from './SensorView'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'

type State = {}
type Props = {}

class SensorContainer extends Component <Props, State> {
  static routeName = 'SensorContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('Sensors'))

  render (): React$Element<View> {
    return <SensorView />
  }
}

export default connect(state => state)(SensorContainer)
