// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import colors from '../libs/Colors'
import {kelvinToCelcius} from '../libs/CommonFunctions'
import Images from '../libs/Images'

let {compass} = Images

type Props = {
  weather: Object,
  isLoading: boolean,
  position: Object
}

export default class WeatherView extends Component <Props> {
  render (): React$Element<*> {
    let {isLoading, weather} = this.props
    if (isLoading || !weather) return <Text style={styles.loading}>Loading...</Text>
    console.log('weather view', weather, weather.main.temp)
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.name}> {weather.name} </Text>
          <Image source={compass} style={styles.compass} />
          <View style={styles.weatherInfo}>
            <Text style={styles.mainDesc}> {weather.weather[0].main + ' ' + kelvinToCelcius(weather.main.temp)} &#8451;</Text>
            <Text>{'Temp min: ' + kelvinToCelcius(weather.main.temp_max)} &#8451;</Text>
            <Text>{'Temp max: ' + kelvinToCelcius(weather.main.temp_min)} &#8451;</Text>
            <Text>{'Humidity: ' + weather.main.humidity}</Text>
          </View>
        </View>
      </View>
    )
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
    paddingTop: 20,
    textAlign: 'center'
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
  mainDesc: {
    fontSize: 25,
    margin: 10
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
