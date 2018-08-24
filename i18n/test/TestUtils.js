// @flow
export let compareKeys = (firstLang: Object, secondLang: Object, firstLangName: string = '', secondLangName: string = '') => {
  let keys = Object.keys(firstLang)
  let errorMessages = []

  keys.forEach(key => {
    if (secondLang[key] === undefined || secondLang[key] === '') {
      errorMessages.push(`Lang: '${secondLangName}', Missing key: '${key}'`)
      return true
    }
    if (secondLang[key].indexOf('$ ') !== -1) { errorMessages.push(`Lang: '${firstLangName}', Key: '${key}' has a $ and whitespace, do you mean $s, $d or $c ?`) }
    return true
  })
  expect(errorMessages).toEqual([])
}
