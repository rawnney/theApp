// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import WeatherView from './WeatherView'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {NACKA_COORDS} from '../consts/Coordinates'
import {getPosition} from '../libs/PositionHelper'
import {getWeather, getWeatherTips, setSysWeatherData} from '../libs/WeatherHelper'
import LoadingScreen from './LoadingScreen'
import {noExitWithTitle} from '../libs/NavigationOptions'

type State = {
  position: Object,
  weather: Object,
  tip: string,
  isLoading: boolean
}

type Props = {}

class WeatherContainer extends Component <Props, State> {
  state = {weather: {}, position: {}, tip: '', isLoading: true}
  static routeName = 'WeatherContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_weather'))

  componentDidMount () {
    this.SetPositionAndWeather()
  }

  render (): React$Element<View> {
    let {weather, isLoading, tip} = this.state
    if (isLoading) return <LoadingScreen />
    return <WeatherView weather={weather} tip={tip} refreshWeather={this.refreshWeather} />
  }

  setPosition = () => {
    return getPosition()
      .then(data => this.setState({position: data}))
  }

  SetPositionAndWeather = () => {
    return getPosition()
      .then(data => this.setState({position: data}))
      .then(() => {
        let {position} = this.state
        getWeather(position, NACKA_COORDS)
          .then(data => this.setState({weather: data}))
          .then(() => {
            let {weather} = this.state
            let {sys} = weather
            this.setState({tip: getWeatherTips(weather), weather: {...weather, sys: setSysWeatherData(sys)}})
          })
          .then(() => {
            let {position, weather, isLoading} = this.state
            if (position && weather) this.setState({isLoading: !isLoading})
          })
      })
  }

  refreshWeather = () => {
    let {position} = this.state
    return getWeather(position, NACKA_COORDS)
      .then(data => this.setState({weather: data}))
      .then(() => {
        let {weather} = this.state
        let {sys} = weather
        this.setState({tip: getWeatherTips(weather), weather: {...weather, sys: setSysWeatherData(sys)}})
      })
  }
}

export default connect(state => state)(WeatherContainer)
