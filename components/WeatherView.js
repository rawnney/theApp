// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet, Animated} from 'react-native'
import colors from '../libs/Colors'
import Images from '../libs/Images'
// import FontAwesome, {Icons} from 'react-native-fontawesome'
let {compass} = Images

type Props = {
  weather: Object,
  position: Object,
  tip: string
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
    this.getAnimationDeg()
    this.startAnimation()
  }

  render (): React$Element<View> {
    let {animationDirection} = this.state
    let {weather, tip} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {/* this.renderIcon() */}
          <Text style={styles.name}> {weather.name}</Text>
          <Text>Wind direction {weather.wind.deg}&deg;</Text>
          <Animated.Image source={compass} style={[styles.compass, {transform: [{rotate: animationDirection}]}]} />
          <View style={styles.weatherInfo}>
            <Text style={styles.mainDesc}> {weather.weather[0].main + ' ' + weather.main.temp} &#8451;</Text>
            <Text>Humidity: {weather.main.humidity} %</Text>
            <Text>Pressure: {weather.main.pressure} hPa</Text>
            <Text>Wind speed: {weather.wind.speed} m/s</Text>
          </View>
          <Text style={styles.tip}>{tip}</Text>
        </View>
      </View>
    )
  }

  // NOTE: SEPARATE ICONCOMP
  // renderIcon = () => {
  //   return (
  //     <View>
  //       <TouchableHighlight>
  //         <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
  //           <FontAwesome>{Icons.chevronDown}</FontAwesome>
  //         </Text>
  //       </TouchableHighlight>
  //     </View>
  //   )
  // }

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
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    flex: 1,
    paddingTop: 20,
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
    top: 120,
    height: 120,
    width: 120
  },
  weatherInfo: {
    marginBottom: 80,
    flex: 1,
    justifyContent: 'flex-end'
  },
  tip: {
    position: 'absolute',
    bottom: 30,
    fontWeight: '200'
  }
})
