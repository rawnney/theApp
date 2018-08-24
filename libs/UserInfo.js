// @flow
import DeviceInfo from 'react-native-device-info'
import {supportedLanguageCodes} from '../i18n/index'
let defaultLang = 'en'

export let getLocale = () => DeviceInfo.getDeviceLocale()

export let getUserLanguage = (): string => {
  let lang = getLocale()
  let isSupported = !!supportedLanguageCodes.find(lang => lang)
  if (!lang || typeof lang !== 'string' || !isSupported) return defaultLang
  return lang
}
