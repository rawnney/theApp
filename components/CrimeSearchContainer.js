// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {getCrimesWithParams, findCrimeType, findDistrict, districtIsFound, crimeTypeIsFound} from '../libs/CrimeHelper'
import {withTitle} from '../libs/NavigationOptions'
import {goTo} from '../libs/NavigationHelper'
import CrimeSearchView from './CrimeSearchView'
import CrimeExtendedContainer from './CrimeExtendedContainer'

type State = {
  isLoading: boolean,
  crimes: Array<Object>,
  nextCrimes: Array<Object>,
  page: number,
  input: string
}

type Props = {
  navigation: Object
}

class CrimeSearchContainer extends Component <Props, State> {
  state = {page: 0, input: '', crimes: [], nextCrimes: [], isLoading: false}
  static routeName = 'CrimeSearchContainer'
  static navigationOptions = getDefaultNavigationOptions(withTitle('title_crime_search'))

  render (): React$Element<View> {
    let {isLoading, crimes} = this.state
    return <CrimeSearchView crimes={crimes} onEndReached={this.onEndReached} isLoading={isLoading} getCrimesWithParams={this.getCrimesWithParams} onPressCrime={this.onPressCrime} refreshCrimes={this.refreshCrimes} />
  }

  getCrimesWithParams = (input: string): * => {
    this.setState({input: input})
    let location = findDistrict(input)
    let type = findCrimeType(input)
    let page = 0
    let params = {limit: 10, location, type, page}
    if (type === '' && location === '') return
    if (districtIsFound(input) || crimeTypeIsFound(input)) this.setState({isLoading: true})
    getCrimesWithParams(params)
      .then(crimes => {
        let allCrimes = []
        allCrimes.push(...crimes.data)
        this.setState({crimes: allCrimes})
      })
      .then(() => this.setState({isLoading: false}))
  }

  refreshCrimes = (input) => {
    this.getCrimesWithParams(input)
  }

  onEndReached = (page) => {
    let {input} = this.state
    let location = findDistrict(input)
    let type = findCrimeType(input)
    let params = {limit: 10, location, type, page}
    getCrimesWithParams(params)
      .then(crimes => {
        let allCrimes = this.state.crimes
        allCrimes.push(...crimes.data)
        this.setState({crimes: allCrimes})
      })
  }

  onPressCrime = (crime) => {
    let {navigation} = this.props
    goTo(navigation, CrimeExtendedContainer.routeName, {crime})
  }
}

export default connect(state => state)(CrimeSearchContainer)
