// @flow
import sv from './text_strings/client/sv.json'
import en from './text_strings/client/en.json'
import _default from './text_strings/client/default.json'
// import I18n from 'react-native-i18n' // NOTE: NEEDED OR...?

export var supportedLanguageCodes = ['sv', 'en']

export let getTextStrings = (lang: string) => {
  switch (lang) {
    case 'sv': return {..._default, ...sv}
    case 'en': return {..._default, ...sv}
    default: return {..._default, ...en}
  }
}
