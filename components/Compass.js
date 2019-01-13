// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
// import * as sensors from 'react-native-sensors'
// import TextView from './TextView'
// import LoadingScreen from './LoadingScreen'

type Props = {}

type State = {
  magnetometer: *,
  magY: *,
  magZ: *,
  magX: *
}

export default class Compass extends Component <Props, State> {
  state = {magnetometer: {}, magY: -1, magZ: 1, magX: 1}

  componentWillMount () {
    this.sensorData()
  }

  componentWillUnmount () {
    let {magnetometer} = this.state
    if (magnetometer === {}) return
    // $FlowFixMe
    this.state.magnetometer.stop()
  }

  render (): * {
    return <View style={styles.container}>
      {/* <TextView text={this.sensorData()} /> */}

    </View>
  }

  sensorData = () => {}
  //   let magnetometer = null
  //   new sensors.Magnetometer({
  //     updateInterval: 500
  //   })
  //     .then(data => {
  //       magnetometer = data
  //       // console.log(magnetometer)
  //       magnetometer
  //         .subscribe(({x, y, z}) => {
  //           let {magY, magZ, magX} = this.state
  //           if (x > magX + 2 || x < magX - 2) this.setState({magX: x})
  //           if (y > magY + 2 || y < magY - 2) this.setState({magY: y})
  //           if (z > magZ + 2 || z < magZ - 2) this.setState({magZ: z})
  //           // console.log('x', magX, 'y', magY, 'z', magZ)
  //           // let az = 90 - Math.atan(magY / magX) * 180 / Math.PI
  //           let direction = 0
  //           let xGaussData = magX * 0.48828125
  //           let yGaussData = magY * 0.48828125
  //           if (yGaussData < 0) direction = 90
  //           if (yGaussData >= 0) direction = 0
  //           if (xGaussData !== 0) direction = Math.atan(yGaussData / xGaussData) * (180 / Math.PI)
  //           if (direction > 360) direction = direction - 360
  //           if (direction < 0) direction = direction + 360
  //
  //           let roll = x; let pitch = y // let yaw = z
  //           let heading = 180 / Math.PI * Math.atan2(pitch, roll)
  //           if (heading < 0) heading += 360
  //           // console.log('Heading= ', heading)
  //           // let tot = roll * roll + pitch * pitch
  //           // let dip = 180 / Math.PI * Math.atan(yaw / Math.sqrt(tot)) // , yaw
  //           // console.log('Dip= ', dip)
  //           // console.log('direction', direction)
  //           // console.log('xGaussData', xGaussData)
  //           // console.log('yGaussData:', yGaussData)
  //           // console.log('az:', az)
  //         })
  //     })
  //     .catch(error => new Error(error))
  //     .then(item => this.setState({magnetometer: magnetometer}))
  // }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
