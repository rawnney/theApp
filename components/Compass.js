// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {decorator as sensors} from 'react-native-sensors'
import TextView from './TextView'
import LoadingScreen from './LoadingScreen'

type Props = {
  sensorsFound: *,
  Accelerometer: *,
  Gyroscope: *
}
type State = {}

class Compass extends Component <Props, State> {
  render (): * {
    let {Accelerometer, Gyroscope} = this.props
    if (!Accelerometer || !Gyroscope) return <LoadingScreen />
    return <View style={styles.container}>
      <TextView text={this.sensorAccelerometer()} />
      <TextView text={this.sensorGyroscope()} />
    </View>
  }

  sensorAccelerometer = () => {
    let {sensorsFound, Accelerometer} = this.props
    if (!sensorsFound['Accelerometer']) return 'Acceleration is not available'
    return `Acceleration has value: ${Accelerometer}`
  }

  sensorGyroscope = () => {
    let {sensorsFound, Gyroscope} = this.props
    if (!sensorsFound['Gyroscope']) return 'Gyro is not available'
    return `Gyro has value: ${Gyroscope}`
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default sensors({
  Accelerometer: {
    updateInterval: 300
  },
  Gyroscope: true
})(Compass)
