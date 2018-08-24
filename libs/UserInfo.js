// @flow
import DeviceInfo from 'react-native-device-info'
import {supportedLanguageCodes} from '../i18n/index'
import Store from './Store'
import {IS_DEV} from './Consts'
let defaultLang = 'en'
let defaultLocale = 'en'
let defaultDegreeSign = '°F'
let defaultDegreeUnit = 'imperial'

export let getLocale = () => DeviceInfo.getDeviceLocale()

export const getUserLocale = (): string => {
  let locale = getLocale()
  if (IS_DEV) return defaultLocale
  if (!locale || typeof locale !== 'string') return defaultLocale
  return locale
}

export let getUserLanguage = (): string => {
  let lang = getUserLocale()
  let isSupported = !!supportedLanguageCodes.find(lang => lang)
  if (!lang || typeof lang !== 'string' || !isSupported) return defaultLang
  return lang
}

export let getUserDegreeSign = (): string => {
  let degreeSign = Store.getState().user.unit
  switch (degreeSign) {
    case 'metric': return '°C'
    case 'imperial': return '°F'
    default: return defaultDegreeSign
  }
}

export let getUserDegreeUnit = (): string => {
  let degreeUnit = Store.getState().user.unit
  if (!degreeUnit) return defaultDegreeUnit
  return degreeUnit
}
