// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet, Animated} from 'react-native'
import colors from '../libs/Colors'
import {kelvinToCelcius, mphToKmh} from '../libs/CommonFunctions'
import Images from '../libs/Images'

let {compass} = Images

type Props = {
  weather: Object,
  isLoading: boolean,
  position: Object
}

type State = {
  animation: Animated,
  animationDirection: *
}

export default class WeatherView extends Component <Props, State> {
  constructor (props: Props) {
    super(props)
    let animationValue = new Animated.Value(0)
    this.state = {
      animationValue,
      animationDirection: '0deg'
    }
  }

  componentDidMount () {
    this.getDegAndStart()
  }

  componentWillUnmount () {
    this.stopAnimation()
  }

  render (): React$Element<*> {
    let {animationDirection} = this.state
    let {isLoading, weather} = this.props
    if (isLoading || !weather) return <Text style={styles.loading}>Loading...</Text>
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.name}> {weather.name}</Text>
          <Text>Wind direction {weather.wind.deg}&deg;</Text>
          <Animated.Image source={compass} style={[styles.compass, {transform: [{rotate: animationDirection}]}]} />
          <View style={styles.weatherInfo}>
            <Text style={styles.mainDesc}> {weather.weather[0].main + ' ' + kelvinToCelcius(weather.main.temp)} &#8451;</Text>
            <Text>Temp min: {kelvinToCelcius(weather.main.temp_max)} &#8451;</Text>
            <Text>Temp max: {kelvinToCelcius(weather.main.temp_min)} &#8451;</Text>
            <Text>Humidity: {weather.main.humidity} %</Text>
            <Text>Pressure: {weather.main.pressure} mbar</Text>
            <Text>Wind speed: {mphToKmh(weather.wind.speed)} km/h</Text>
          </View>
        </View>
      </View>
    )
  }

  getDegAndStart = async () => {
    setTimeout(() => {
      this.getAnimationDeg()
      this.startAnimation()
    }, 5000)
  }

  getAnimationDeg = () => {
    let {animationValue} = this.state
    let {weather} = this.props
    let {deg} = weather.wind
    let animationDirection = animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', deg + 'deg']
    })
    this.setState({animationDirection})
  }

  startAnimation = () => {
    var {animationValue} = this.state
    Animated.timing(animationValue, {
      toValue: 2,
      duration: 5000
    }).start()
  }

  stopAnimation = () => {
    var {animationValue} = this.state
    if (animationValue) animationValue.stop()
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center'
  },
  loading: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    paddingTop: '50%',
    textAlign: 'center'
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
  mainDesc: {
    fontSize: 25,
    marginBottom: 20
  },
  compass: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 120,
    height: 120,
    width: 120
  },
  weatherInfo: {
    marginBottom: 90,
    flex: 1,
    justifyContent: 'flex-end'
  }
})
