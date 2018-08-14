/* @flow */
import Configurations from '../config/Configurations'
// TODO import Config from 'react-native-config'
// TODO import DeviceInfo from 'react-native-device-info'
// TODO import DeviceConfig from '../config/DeviceModelConfig'
// TODO import OSVersionConfig from '../config/OSVersionConfig'
// TODO import * as PlatformConfig from '../config/PlatformConfig'

let getConfiguration = () => {
  // TODO Create enviroment config
  // var env = Config.ENVIRONMENT
  var config = Configurations.Development
  if (!config) throw new Error('Cant find Config')
  return config
}

export let enrichConfiguration = (config: * = getConfiguration()) => {
  // Feature toogle system,
  // We apply features in the following priority order (1 has priority over 3):
  // 1. PlatformFeatures (IOS vs Android)
  // 2. DeviceModelFeatures (Iphone 4s vs Iphone 6)
  // 3. Environment Specific Features (DEV vs STAGING vs PROD)

  // Furtheremore, we override feature flags.
  // So in other words, dont mess around with the lines here below!!!!!!
  /* 1 */ config = {...config, ...config.features}
  /* 2 */ // TODO config = {...config, ...I18nConfig.getFeatures(config.name)}
  /* 3 */ // TODO config = {...config, ...OSVersionConfig(DeviceInfo.getSystemVersion())}
  /* 4 */ // TODO config = {...config, ...DeviceModelConfig(DeviceInfo.getModel())}
  /* 5 */ // TODO config = {...config, ...PlatformConfig.features}

  return config
}

export let isDev = (): boolean => {
  return typeof __DEV__ === 'boolean' ? __DEV__ : false
} // __DEV__ Injeted variable from react framework

export let isNotProd = (): boolean => {
  return getConfiguration().name !== 'PROD'
}

export default enrichConfiguration()
