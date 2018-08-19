// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {decorator as sensors} from 'react-native-sensors'
import TextView from './TextView'
import LoadingScreen from './LoadingScreen'
import {fraction} from '../libs/CommonFunctions'
import {GYROSCOPE_LIMT, ACCELEROMETER_LIMIT} from '../libs/Consts'

type Props = {
  sensorsFound: *,
  Accelerometer: *,
  Gyroscope: *
}

type State = {
  gx: number,
  gy: number,
  gz: number,
  ax: number,
  ay: number,
  az: number
}

class NativeSensors extends Component <Props, State> {
  state = {gx: 0, gy: 0, gz: 0, ax: 0, ay: 0, az: 0}

  componentDidUpdate (prevProps) {
    let {Accelerometer, Gyroscope} = this.props
    if (prevProps.Accelerometer !== Accelerometer) this.setAccelerometerValues()
    if (prevProps.Gyroscope !== Gyroscope) this.setGyroscopeValues()
  }

  render (): React$Element<View> {
    let {Accelerometer, Gyroscope} = this.props
    if (!Accelerometer || !Gyroscope) return <LoadingScreen />
    return <View style={styles.container}>
      <View style={styles.wrapper}>
        {this.renderAccelerometer()}
        {this.renderGyroscope()}
      </View>
    </View>
  }

  renderAccelerometer = () => {
    let {sensorsFound} = this.props
    let {ax, ay, az} = this.state
    if (!sensorsFound['Accelerometer']) return <View />
    return <View>
      <TextView text={'Accelerometer values'} />
      <TextView text={'X: ' + fraction(ax)} />
      <TextView text={'Y: ' + fraction(ay)} />
      <TextView text={'Z: ' + fraction(az)} />
    </View>
  }

  renderGyroscope = () => {
    let {sensorsFound} = this.props
    let {gx, gy, gz} = this.state
    if (!sensorsFound['Gyroscope']) return <View />
    return <View>
      <TextView text={'Gyroscope values'} />
      <TextView text={'X: ' + fraction(gx)} />
      <TextView text={'Y: ' + fraction(gy)} />
      <TextView text={'Z: ' + fraction(gz)} />
    </View>
  }

  setAccelerometerValues = () => {
    let {Accelerometer} = this.props
    let {ax, ay, az} = this.state
    if (Accelerometer.x > ACCELEROMETER_LIMIT + ax || Accelerometer.x < ax - ACCELEROMETER_LIMIT) this.setState({ax: Accelerometer.x})
    if (Accelerometer.y > ACCELEROMETER_LIMIT + ay || Accelerometer.y < ay - ACCELEROMETER_LIMIT) this.setState({ay: Accelerometer.y})
    if (Accelerometer.z > ACCELEROMETER_LIMIT + az || Accelerometer.z < az - ACCELEROMETER_LIMIT) this.setState({az: Accelerometer.z})
  }

  setGyroscopeValues = () => {
    let {Gyroscope} = this.props
    let {gx, gy, gz} = this.state
    if (Gyroscope.x > GYROSCOPE_LIMT + gx || Gyroscope.x < gx - GYROSCOPE_LIMT) this.setState({gx: Gyroscope.x})
    if (Gyroscope.y > GYROSCOPE_LIMT + gy || Gyroscope.y < gy - GYROSCOPE_LIMT) this.setState({gy: Gyroscope.y})
    if (Gyroscope.z > GYROSCOPE_LIMT + gz || Gyroscope.z < gz - GYROSCOPE_LIMT) this.setState({gz: Gyroscope.z})
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    alignSelf: 'center'
  }
})

export default sensors({
  Accelerometer: {
    updateInterval: 400
  },
  Gyroscope: true
})(NativeSensors)
