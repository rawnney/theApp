// @flow
import React, {Component} from 'react'
import {View, StyleSheet, Animated, ScrollView, RefreshControl} from 'react-native'
import Images from '../libs/Images'
import {ZERO_DEG} from '../consts/Animations'
import {getWindDirection, getWeatherIcon} from '../libs/WeatherHelper'
import {fraction} from '../libs/CommonFunctions'
import {themeBgColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'
let {compass} = Images

type Props = {
  weather: Object,
  tip: string,
  refreshWeather: Function
}

type State = {
  animationValue: Animated,
  animationDirection: *,
  isRefreshing: boolean,
  weather: Object
}

export default class WeatherView extends Component <Props, State> {
  constructor (props: Props) {
    super(props)
    let animationValue = new Animated.Value(0)
    this.state = {
      animationValue,
      animationDirection: ZERO_DEG,
      isRefreshing: false,
      weather: {}
    }
  }

  componentWillMount () {
    let {weather} = this.props
    if (weather) this.setState({weather: weather})
  }

  componentDidMount () {
    this.getAnimationDeg()
    this.startAnimation()
  }

  componentWillReceiveProps (nextProps: Object) {
    if (this.props.weather !== nextProps.weather) {
      this.setState({weather: nextProps.weather})
    }
  }

  render (): React$Element<View> {
    let {animationDirection, isRefreshing} = this.state
    let {weather, tip, refreshWeather} = this.props
    let {name, wind, main} = weather
    let {deg, speed} = wind
    return <View style={[styles.container, themeBgColor()]}>
      <ScrollView contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshWeather} />}>
        <TextView text={name} style={styles.name} />
        <Animated.Image source={compass} style={[styles.compass, {transform: [{rotate: animationDirection}]}]} />
        <View style={styles.weatherInfo}>
          <TextView text={getWeatherIcon(weather.weather[0].main)} style={styles.weatherIcon} />
          <TextView style={styles.mainDesc} text={weather.weather[0].main + ' ' + fraction(main.temp, 1) + ' C°'} />
          <TextView text={'Humidity: ' + main.humidity + ' %'} />
          <TextView text={'Pressure: ' + main.pressure + ' hPa'} />
          <TextView text={'Wind: ' + getWindDirection(deg) + ' ' + speed + ' m/s'} />
        </View>
        <TextView style={styles.tip} text={tip} />
      </ScrollView>
    </View>
  }

  getAnimationDeg = () => {
    let {animationValue} = this.state
    let {weather} = this.props
    let {deg} = weather.wind
    if (!deg) deg = 360
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
    alignItems: 'center',
    width: '100%'
  },
  contentContainer: {
    height: '100%',
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
  mainDesc: {
    fontSize: 25,
    marginBottom: 20,
    marginTop: 10
  },
  compass: {
    position: 'absolute',
    top: 75,
    height: 120,
    width: 120
  },
  weatherInfo: {
    marginTop: 20
  },
  weatherIcon: {
    alignSelf: 'center',
    fontSize: 50
  },
  tip: {
    bottom: 40,
    fontWeight: '200'
  }
})
