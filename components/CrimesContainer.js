// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {getPosition} from '../libs/PositionHelper'
import {getCrimes} from '../libs/CrimeHelper' // getCrimesWithParams, findCrimeType, findDistrict
import CrimesView from './CrimesView'
import {goTo} from '../libs/NavigationHelper'
import CrimeExtendedContainer from './CrimeExtendedContainer'
import LoadingScreen from './LoadingScreen'
import {noExitWithTitle} from '../libs/NavigationOptions'

type State = {
  position: Object,
  crimes: Array<Object>,
  isLoading: boolean
  // extendedSearch: Array<Object>,
}

type Props = {
  navigation: Object
}

class CrimesContainer extends Component <Props, State> {
  state = {crimes: [], position: {}, isLoading: true} // extendedSearch: []
  static routeName = 'CrimesContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_crimes_near_you'))

  componentWillMount () {
    this.setPositionAndCrimes()
  }

  render (): React$Element<View> {
    let {crimes, isLoading} = this.state
    if (isLoading) return <LoadingScreen />
    return <CrimesView crimes={crimes} onPressCrime={this.onPressCrime} refreshCrimes={this.refreshCrimes} /> // getCrimesWithParams={this.getCrimesWithParams}
  }

  setPositionAndCrimes = () => {
    getPosition()
      .then(position => this.setState({position}))
      .then(() => {
        let {position} = this.state
        getCrimes(position)
          .then(crimes => this.setState({crimes: crimes.data}))
          .then(() => {
            let {position, crimes, isLoading} = this.state
            if (position && crimes) this.setState({isLoading: !isLoading})
          })
      })
  }

  // getCrimesWithParams = (input: string): * => {
  //   let location = findDistrict(input)
  //   let type = findCrimeType(input)
  //   let limit = 5
  //   let page = 1
  //
  //   let params = {limit, location, type, page}
  //   if (type === '' && location === '') return
  //   getCrimesWithParams(params)
  //     .then(crimes => this.setState({extendedSearch: crimes.data}))
  // }

  refreshCrimes = () => {
    let {position} = this.state
    getCrimes(position)
      .then(crimes => this.setState({crimes: crimes.data}))
  }

  onPressCrime = (crime) => {
    let {navigation} = this.props
    goTo(navigation, CrimeExtendedContainer.routeName, {crime})
  }
}

export default connect(state => state)(CrimesContainer)
