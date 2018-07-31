// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import colors from '../libs/Colors'
import {kelvinToCelcius} from '../libs/CommonFunctions'

// type State = {
//   weather: Object,
//   isLoading?: boolean
// }

type Props = {
  weather?: Object,
  isLoading?: boolean,
  position: Object
}

export default class WeatherView extends Component <Props, State> {
  render (): React$Element<*> {
    let {isLoading, weather} = this.props
    if (isLoading || !weather) return <Text style={styles.loading}>Loading...</Text>
    console.log('weather view', weather, weather.main.temp)
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text> {weather.name} </Text>
          <Text>{'Temp: ' + kelvinToCelcius(weather.main.temp)} &#8451;</Text>
          <Text>{'Humidity ' + weather.main.humidity}</Text>
          <Text>{weather.humidity}</Text>
          <Text>{weather.humidity}</Text>
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
  }
})
