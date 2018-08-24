// @flow
import React, {Component} from 'react'
import {View, StyleSheet, Animated, ScrollView, RefreshControl} from 'react-native'
import Images from '../libs/Images'
import {ZERO_DEG, DEG} from '../libs/Consts'
import {getWindDirection, getWeatherIcon, getWeatherText} from '../libs/WeatherHelper'
import {fraction} from '../libs/CommonFunctions'
import {themeBgColor} from '../libs/ColorThemeHelper'
import TextView from './TextView'
import Fonts from '../libs/Fonts'
import {getText} from '../libs/TextHelper'
import {getUserDegreeSign} from '../libs/UserInfo'
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

  componentWillReceiveProps (nextProps: Props) {
    if (this.props.weather !== nextProps.weather) {
      this.setState({weather: nextProps.weather})
    }
  }

  render (): React$Element<View> {
    let {animationDirection, isRefreshing, weather} = this.state
    let {tip, refreshWeather} = this.props
    let {name, wind, main, clouds, sys} = weather
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
          <TextView text={this.getIcon()} style={styles.weatherIcon} />
          <TextView style={styles.mainDesc} text={getText(getWeatherText(weather), [fraction(main.temp, 1), getUserDegreeSign()])} />
          <TextView text={getText('weather_humidity', [main.humidity])} />
          <TextView text={getText('weather_pressure', [main.pressure])} />
          <TextView text={getText('weather_wind', [getWindDirection(deg), fraction(speed, 1)])} />
          <TextView text={getText('weather_clouds', [clouds.all])} />
          <TextView text={getText('weather_sunrise', [sys.sunrise])} />
          <TextView text={getText('weather_sunset', [sys.sunset])} />
        </View>
        <TextView style={styles.tip} text={getText(tip)} />
      </ScrollView>
    </View>
  }

  getIcon = (): string => {
    let {weather} = this.state
    return getWeatherIcon(weather)
  }

  getAnimationDeg = () => {
    let {animationValue} = this.state
    let {weather} = this.props
    let {deg} = weather.wind
    if (!deg) deg = 360
    let animationDirection = animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [ZERO_DEG, deg + DEG]
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
    ...Fonts.bold,
    fontSize: 28,
    margin: 10
  },
  mainDesc: {
    fontSize: 25,
    marginBottom: 10,
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
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 50
  },
  tip: {
    ...Fonts.light,
    bottom: 40
  }
})
