// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, Animated} from 'react-native'
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
  animation: Animated
}

export default class WeatherView extends Component <Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0)
    }
  }

  componentDidMount () {
    this.startAnimation()
  }

  componentWillUnmount () {
    this.stopAnimation()
  }

  render (): React$Element<*> {
    let {animation} = this.state
    let {isLoading, weather} = this.props
    if (isLoading || !weather) return <Text style={styles.loading}>Loading...</Text>
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.name}> {weather.name}</Text>
          <Image source={compass} style={styles.compass} />
          <Animated.Image source={compass} style={[styles.compass, {top: animation}]} />
          <View style={styles.weatherInfo}>
            <Text style={styles.mainDesc}> {weather.weather[0].main + ' ' + kelvinToCelcius(weather.main.temp)} &#8451;</Text>
            <Text>Temp min: {kelvinToCelcius(weather.main.temp_max)} &#8451;</Text>
            <Text>Temp max: {kelvinToCelcius(weather.main.temp_min)} &#8451;</Text>
            <Text>Humidity: {weather.main.humidity} %</Text>
            <Text>Pressure: {weather.main.pressure} mbar</Text>
            <Text>Wind direction: {weather.wind.deg}&deg;</Text>
            <Text>Wind speed: {mphToKmh(weather.wind.speed)} km/h</Text>
          </View>
        </View>
      </View>
    )
  }

  startAnimation = () => {
    var {animation} = this.state
    let animSeq = Animated.sequence([
      Animated.timing(animation, {
        toValue: 20,
        duration: 2000
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 2000
      })
    ])
    animSeq.start()
    this.setState({animSeq})
  }

  stopAnimation = () => {
    var {animSeq} = this.state
    if (animSeq) animSeq.stop()
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
    marginTop: 10,
    marginBottom: 10
  },
  compass: {
    position: 'absolute',
    top: 80,
    height: 120,
    width: 120
  },
  weatherInfo: {
    marginTop: 130
  }
})
