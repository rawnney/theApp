// @flow
import DeviceInfo from 'react-native-device-info'

export let features = DeviceInfo.isEmulator() ? {
  enableSensors: false
} : {}
