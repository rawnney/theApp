// @flow
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
// import * as Actions from '../libs/Actions'
import WeatherView from './WeatherView'
import {navigationOptions} from 'react-navigation'
import defaultNavHeader from './DefaultNavHeader'
import {getPosition, getWeatherData} from '../libs/WeatherHelper'
import {weatherApiCall} from '../libs/ApiHandler'

type State = {
  position: Object,
  weather: Object
}

class WeatherContainer extends Component <Props, State> {
  static navigationOptions = {
    ...defaultNavHeader,
    headerTitle: 'Weather'
  }

  constructor (props: *) {
    super(props)
    this.state = {
      weather: {}
    }
  }

  componentDidMount () {
    // let {position} = this.state
    this.setState({position: getPosition()})
    // this.setState({weather: weatherApiCall()})
    // let {position} = this.state
    // this.setState({weather: getWeatherData()})
  }

  render (): React$Element<*> {
    let {position, weather} = this.state
    console.log(position)
    // if (!!weather === false) return <Text>No weather </Text>
    // console.log('state', this.state.weather)
    return <WeatherView position={position} weather={{}} isLoading={!!weather} />
  }
}

export default connect(state => state)(WeatherContainer)
