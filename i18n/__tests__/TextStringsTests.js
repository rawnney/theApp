import {getTextStrings, supportedLanguageCodes} from '../index'
import {compareKeys} from '../../test/TestUtil'

describe('TextStrings', () => {
  it('should return Text strings', () => {
    supportedLanguageCodes.forEach(lang => expect(getTextStrings(lang)).not.toEqual(undefined, 'Cant find TextStrings for: ' + lang))
  })

  it('all textstrings should have a equivalent string in all other languages', () => {
    supportedLanguageCodes.forEach(lang1 => {
      supportedLanguageCodes.forEach(lang2 => {
        compareKeys(getTextStrings(lang1), getTextStrings(lang2), lang1, lang2)
      })
    })
  })
})
