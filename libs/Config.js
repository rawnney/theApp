/* @flow */
import Configurations from '../config/Configurations'
import DeviceInfo from 'react-native-device-info'
import DeviceModelConfig from '../config/DeviceModelConfig'
import Config from 'react-native-config'
// TODO import * as I18nConfig from '../config/I18nConfig'
// TODO import * as LangConfig from '../config/LangConfig'
// TODO import OSVersionConfig from '../config/OSVersionConfig'
import * as PlatformConfig from '../config/PlatformConfig'
import DevConfig from '../config/DevConfig'

export let getConfiguration = () => {
  var env = Config.ENVIRONMENT
  var config = Configurations[env]
  if (!config) throw new Error(`Cant find Config: '${env}'`)
  return config
}

export let enrichConfiguration = (config: * = getConfiguration()) => {
  /* 1 */ config = {...config, ...config.features}
  /* 2 */ // TODO config = {...config, ...LangConfig.getFeatures(config.name)}
  /* 3 */ // TODO config = {...config, ...I18nConfig.getFeatures(config.name)}
  /* 4 */ // TODO config = {...config, ...OSVersionConfig(DeviceInfo.getSystemVersion())}
  /* 5 */ config = {...config, ...DeviceModelConfig(DeviceInfo.getModel())}
  /* 6 */ config = {...config, ...PlatformConfig.features}
  /* 7 */ config = {...config, ...DevConfig(DeviceInfo.isEmulator())}

  return config
}

export let isDev = (): boolean => {
  return typeof __DEV__ === 'boolean' ? __DEV__ : false
} // __DEV__ Injeted variable from react framework

export let isNotProd = (): boolean => {
  return getConfiguration().name !== 'Production'
}

export default enrichConfiguration()
