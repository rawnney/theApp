// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import WeatherView from './WeatherView'
import {getDefaultNavigationOptions} from './DefaultNavHeader'
import {LIDINGO_COORDS} from '../consts/Coordinates'
import {getPosition} from '../libs/PositionHelper'
import {getWeather, getWeatherTips} from '../libs/WeatherHelper'
import LoadingScreen from './LoadingScreen'

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
  static navigationOptions = getDefaultNavigationOptions()

  componentDidMount () {
    this.SetPositionAndWeather()
  }

  render (): React$Element<View> {
    let {weather, isLoading, tip} = this.state
    if (isLoading) return <LoadingScreen />
    return <WeatherView weather={weather} tip={tip} />
  }

  SetPositionAndWeather = () => {
    getPosition()
      .then(data => this.setState({position: data}))
      .then(() => {
        let {position} = this.state
        getWeather(position, LIDINGO_COORDS)
          .then(data => this.setState({weather: data}))
          .then(() => {
            let {weather} = this.state
            this.setState({tip: getWeatherTips(weather)})
          })
          .then(() => {
            let {position, weather, isLoading} = this.state
            if (position && weather) this.setState({isLoading: !isLoading})
          })
      })
  }
}

export default connect(state => state)(WeatherContainer)
