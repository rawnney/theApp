// @flow
import * as I18n from '../i18n/'

let textStrings = {}
// let userLanguage
setLanguage('en') // getUserLanguage()
export function setLanguage (lang: string) {
  if (!lang) return
  textStrings = I18n.getTextStrings(lang)
}

export function getText (langKey: *, values?: Array<*>, textTransform?: string = 'capitalize'): string {
  if (typeof textStrings === 'undefined') return ''
  if (!textStrings || !langKey) return ''
  var text = textStrings[langKey]
  if (!text) return ''

  if (values) {
    values.forEach((item, index) => {
      text = text.split(`%${index + 1}$d`).join(item)
    })
  }

  if (textTransform) {
    switch (textTransform) {
      case 'uppercase': return text = text.toUpperCase()
      case 'capitalize': return text = text.charAt(0).toUpperCase() + text.slice(1)
      case 'lowercase': return text = text.toLowerCase()
      default: return text
    }
  }

  return text
}
