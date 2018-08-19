// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {getPosition} from '../libs/PositionHelper'
import {getCrimes} from '../libs/CrimeHelper'
import {LIDINGO_COORDS} from '../consts/Coordinates'
import CrimesView from './CrimesView'
import {goTo} from '../libs/NavigationHelper'
import CrimeExtendedContainer from './CrimeExtendedContainer'
import LoadingScreen from './LoadingScreen'
import {noExitWithTitle} from '../consts/NavigationOptions'

type State = {
  position: Object,
  crimes: Object,
  isLoading: boolean
}

type Props = {
  navigation: Object
}

class CrimesContainer extends Component <Props, State> {
  state = {crimes: {}, position: {}, isLoading: true}
  static routeName = 'CrimesContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('Crimes'))

  componentDidMount () {
    this.setPositionAndCrimes()
  }
  render (): React$Element<View> {
    let {isLoading, crimes} = this.state
    if (isLoading) return <LoadingScreen />
    return <CrimesView crimes={crimes.data} onPressCrime={this.onPressCrime} refreshCrimes={this.refreshCrimes} />
  }

  setPositionAndCrimes = () => {
    getPosition()
      .then(data => this.setState({position: data}))
      .then(() => {
        let {position} = this.state
        getCrimes(position, LIDINGO_COORDS)
          .then(data => this.setState({crimes: data}))
          .then(() => {
            let {position, crimes, isLoading} = this.state
            if (position && crimes) this.setState({isLoading: !isLoading})
          })
      })
  }

  refreshCrimes = () => {
    let {position} = this.state
    getCrimes(position, LIDINGO_COORDS)
      .then(data => this.setState({crimes: data}))
  }

  onPressCrime = (crime) => {
    let {navigation} = this.props
    goTo(navigation, CrimeExtendedContainer.routeName, {crime})
  }
}

export default connect(state => state)(CrimesContainer)
