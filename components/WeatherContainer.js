// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import WeatherView from './WeatherView'
import defaultNavHeader from './DefaultNavHeader'
import {MADERO_LAT, MADERO_LNG} from '../libs/Const'
import {getPosition} from '../libs/PositionHelper'
import {getWeather, getWeatherTips} from '../libs/WeatherHelper'
import colors from '../libs/Colors'

type State = {
  position: Object,
  weather: Object,
  tip: string,
  isLoading: boolean
}

type Props = {}

class WeatherContainer extends Component <Props, State> {
  state = {weather: {}, position: {}, tip: '', isLoading: true}
  static navigationOptions = {
    ...defaultNavHeader,
    headerTitle: 'Weather'
  }

  componentDidMount () {
    this.SetPositionAndWeather()
  }

  render (): React$Element<View> {
    let {position, weather, isLoading, tip} = this.state
    if (isLoading) return <Text style={styles.loading}>Loading...</Text>
    return <WeatherView position={position} weather={weather} tip={tip} />
  }

  SetPositionAndWeather = () => {
    getPosition()
      .then(data => this.setState({position: data}))
      .then(() => {
        let {position} = this.state
        getWeather(position, MADERO_LAT, MADERO_LNG)
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

export let styles = StyleSheet.create({
  loading: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    paddingTop: '50%',
    textAlign: 'center'
  }
})

export default connect(state => state)(WeatherContainer)
