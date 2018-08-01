// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import WeatherView from './WeatherView'
// import {navigationOptions} from 'react-navigation'
import defaultNavHeader from './DefaultNavHeader'
import {WEATHER_API_KEY} from '../libs/Const'

type State = {
  position: Object,
  weather: Object,
  isLoading: boolean
}

class WeatherContainer extends Component <Props, State> {
  static navigationOptions = {
    ...defaultNavHeader,
    headerTitle: 'Weather'
  }

  constructor (props: *) {
    super(props)
    this.state = {
      weather: undefined,
      position: undefined,
      isLoading: true
    }
  }

  componentDidMount () {
    let {isLoading} = this.state
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({position: pos.coords})
    })
    if (isLoading) this.setWeather()
  }

  render (): React$Element<*> {
    let {position, weather, isLoading} = this.state
    return <WeatherView position={position} weather={weather} isLoading={!isLoading} />
  }

  getWeather = (): Object => {
    let {position} = this.state
    let {latitude, longitude} = position
    let sthlm = false
    let madero = true
    if (sthlm) { latitude = '59.334591'; longitude = '18.063240' }
    if (madero) { latitude = '59.233262'; longitude = '18.613657' }
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=` + WEATHER_API_KEY)
      .then(res => res.json())
      .then(json => this.setState({weather: json}))
  }

  setWeather = (): * => {
    let {weather, isLoading} = this.state
    let timeID = () => setTimeout(() => this.getWeather(), 2000)
    if (weather === undefined) timeID()
    else {
      this.setState({isLoading: !isLoading})
      clearTimeout(timeID)
    }
  }
}

export default connect(state => state)(WeatherContainer)
