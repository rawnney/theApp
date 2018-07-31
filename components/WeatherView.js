// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
// import colors from '../libs/Colors'
import {kelvinToCelcius} from '../libs/CommonFunctions'
import {getPosition, getWeatherData} from '../libs/WeatherHelper'

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
  constructor (props: *) {
    super(props)
    this.state = {
      // position: undefined,
      weather: undefined
    }
  }

  // componentWillReceiveProps (nextProps: Object) {
  //   console.warn('nextProps', nextProps)
  //   let {weather} = nextProps // isLoading
  //   if (!weather) this.setState({weather})
  //   // if (!isLoading) this.setState({isLoading})
  // }

  render (): React$Element<*> {
    // let {weather} = this.state // weather
    let {isLoading, weather, position} = this.props
    // let {name, main, temp} = weather
    // console.log('weather view', weather)
    // if (isLoading || weather === null) return <Text>Loading...</Text>
    // if (!!name || !!main || !!temp) return <Text>Cant get your weatherdata</Text>
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Your weather</Text>
          <Text>{'lat:' + position + 'lng:' + position}</Text>
          {/*<Text>{weather}</Text>*/}
          {/* <Text> {name} </Text>
          <Text> {main} </Text>
          <Text>{kelvinToCelcius(temp)} &#8451;</Text> */}
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1
  }
})
