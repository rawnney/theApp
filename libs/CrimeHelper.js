// @flow
import {NO_COORDS} from '../consts/Coordinates'
import {ApiBrottsplatskartanNearBy} from '../consts/ApiUrls'
import {getDefaultHeaders} from './ApiHelper'

export let getCrimes = (position: Object): Promise <Object> => {
  return new Promise((resolve, reject) => {
    let {latitude, longitude} = position
    if (!latitude || !longitude) Error(NO_COORDS)
    fetch(ApiBrottsplatskartanNearBy(latitude, longitude), getDefaultHeaders())
      .then(res => res.json())
      .catch((error) => { return reject(error) })
      .then(json => resolve(json))
  })
}

export function getCrimeIcon (type: *): string {
  if (type.includes('Trafikolycka')) type = 'Trafikolycka'
  if (type.includes('Larm')) type = 'Larm'
  if (type.includes('Skottlossning')) type = 'Skottlossning'
  if (type.includes('inbrott')) type = 'Bostadsinbrott'
  if (type.includes('Rån')) type = 'Rån'
  if (type.includes('Farligt föremål')) type = 'Farligt föremål'
  // includes mord / dråp skull?
  switch (type) {
    case 'Alkohollag': return '🍺'
    case 'Anhållen': return '👮'
    case 'Arbetsplatsolycka': return '👷'
    case 'Bedrägeri': return '💸'
    case 'Bostadsinbrott': return '🏠'
    case 'Brand': return '🔥'
    case 'Brott': return '👮️‍'
    case 'Brott i nära relation': return '👫'
    case 'Brottsplatsundersökning': return '🕵'
    case 'Dråp': return '💀'
    case 'Efterlyst': return '🏃‍'
    case 'Eldningsförbud': return '🚫'
    case 'Envarsgripande': return '👨‍👩‍👦‍👦'
    case 'Fickstölder och bagagestölder': return '💰'
    case 'Fylleri/LOB': return '🍸'
    case 'Kontroll person/fordon': return '🚗'
    case 'Trafikolycka': return '💥'
    case 'Våld/hot mot tjänsteman': return '💂'
    case 'Stöld': return '💰'
    case 'Stöld/inbrott': return '💰'
    case 'Rån': return '💰'
    case 'Trafikhinder': return '🚧'
    case 'Ordningslagen': return '☯️'
    case 'Polisinsats/kommendering': return '🚓'
    case 'Bråk': return '💢'
    case 'Larm': return '🔔'
    case 'Vapenlagen': return '🔫'
    case 'Skottlossning': return '🔫'
    case 'Misshandel': return '👊'
    case 'Knivlagen': return '🔪'
    case 'Narkotikabrott': return '💊'
    case 'Farligt föremål': return '💣'
    case 'Olaga hot': return '🤬'
    case 'Räddningsinsats': return '🙏'
    case 'Skadegörelse': return '👎'
    case 'Rattfylleri': return '🍷'
    case 'Missbruk av urkund': return '📝'
    // case 'Detonation': return 'boom'
    // case 'Fjällräddning': return 'mountain?'
    // case 'Sederlighetsbrott': return 'squash'
    // case 'Sammanfattning': return 'book, document?'
    default: return '👮️‍'
  }
}

export function formatContent (string: string): string {
  let find1 = '\n'
  let find2 = '</p>'
  let find3 = '<p>'
  let find4 = '<strong>'
  let find5 = '</strong>'
  let find6 = '<br />'
  string = string.replace(new RegExp(find1, 'g'), '\n \n')
  string = string.replace(new RegExp(find2, 'g'), '')
  string = string.replace(new RegExp(find3, 'g'), '')
  string = string.replace(new RegExp(find4, 'g'), '')
  string = string.replace(new RegExp(find5, 'g'), '')
  string = string.replace(new RegExp(find6, 'g'), '\n')
  return string
}
