// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import WeatherView from './WeatherView'
import defaultNavHeader from './DefaultNavHeader'
import {MADERO_LAT, MADERO_LNG} from '../libs/Const'
import {getPosition} from '../libs/PositionHelper'
import {getWeather} from '../libs/WeatherHelper'

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
    this.SetPositionAndWeather()
  }

  render (): React$Element<View> {
    let {position, weather, isLoading} = this.state
    return <WeatherView position={position} weather={weather} isLoading={isLoading} />
  }

  SetPositionAndWeather = () => {
    getPosition()
      .then(data => this.setState({position: data}))
      .then(() => {
        let {position} = this.state
        getWeather(position, MADERO_LAT, MADERO_LNG)
          .then(data => this.setState({weather: data}))
          .then(() => {
            let {position, weather, isLoading} = this.state
            if (position && weather) this.setState({isLoading: !isLoading})
          })
      })
  }
}

export default connect(state => state)(WeatherContainer)
