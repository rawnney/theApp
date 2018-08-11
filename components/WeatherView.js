// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet, Animated} from 'react-native'
import colors from '../libs/Colors'
import Images from '../libs/Images'
import {ZERO_DEG} from '../consts/Animations'
import {fraction} from '../libs/CommonFunctions'
import {getWindDirection} from '../libs/WeatherHelper'
let {compass} = Images

type Props = {
  weather: Object,
  tip: string
}

type State = {
  animationValue: Animated,
  animationDirection: *
}

export default class WeatherView extends Component <Props, State> {
  constructor (props: Props) {
    super(props)
    let animationValue = new Animated.Value(0)
    this.state = {
      animationValue,
      animationDirection: ZERO_DEG
    }
  }

  componentDidMount () {
    this.getAnimationDeg()
    this.startAnimation()
  }

  render (): React$Element<View> {
    let {animationDirection} = this.state
    let {weather, tip} = this.props
    return <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.name}> {weather.name}</Text>
        <Animated.Image source={compass} style={[styles.compass, {transform: [{rotate: animationDirection}]}]} />
        <View style={styles.weatherInfo}>
          <Text style={styles.mainDesc}>{weather.weather[0].main + ' ' + fraction(weather.main.temp, 1)} &#8451;</Text>
          <Text>Humidity: {weather.main.humidity} %</Text>
          <Text>Pressure: {weather.main.pressure} hPa</Text>
          <Text>Wind: {getWindDirection(weather.wind.deg)} {weather.wind.speed} m/s</Text>
        </View>
        <Text style={styles.tip}>{tip}</Text>
      </View>
    </View>
  }

  getAnimationDeg = () => {
    let {animationValue} = this.state
    let {weather} = this.props
    let {deg} = weather.wind
    let animationDirection = animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [ZERO_DEG, deg + 'deg']
    })
    this.setState({animationDirection})
  }

  startAnimation = () => {
    let {animationValue} = this.state
    Animated.timing(animationValue, {
      toValue: 2,
      duration: 5000
    }).start()
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    flex: 1,
    alignItems: 'center'
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
    top: 90,
    height: 120,
    width: 120
  },
  weatherInfo: {
    marginBottom: 160,
    flex: 1,
    justifyContent: 'flex-end'
  },
  tip: {
    position: 'absolute',
    bottom: 40,
    fontWeight: '200'
  }
})
