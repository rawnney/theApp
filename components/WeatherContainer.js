// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import WeatherView from './WeatherView'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
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
    this.setPositionAndWeather()
  }

  render (): React$Element<View> {
    let {weather, isLoading, tip} = this.state
    if (isLoading) return <LoadingScreen />
    return <WeatherView weather={weather} tip={tip} refreshWeather={this.refreshWeather} />
  }

  setPositionAndWeather = () => {
    getPosition()
      .then(position => this.setState({position}))
      .then(() => {
        let {position} = this.state
        getWeather(position)
          .then(weather => this.setState({weather}))
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
    getWeather(position)
      .then(weather => this.setState({weather}))
      .then(() => {
        let {weather} = this.state
        let {sys} = weather
        this.setState({tip: getWeatherTips(weather), weather: {...weather, sys: setSysWeatherData(sys)}})
      })
  }
}

export default connect(state => state)(WeatherContainer)
