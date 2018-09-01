// @flow
import {NO_COORDS, SV_DISTRICTS} from '../consts/Coordinates'
import {ApiBrottsplatskartanNearBy, ApiBrottplatskartanWithParams} from '../consts/ApiUrls'
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

export let getCrimesWithParams = (params: Object): Promise <Object> => {
  let {limit, location, type, page} = params
  return new Promise((resolve, reject) => {
    fetch(ApiBrottplatskartanWithParams(limit || '50', location, type || '', page || '1'), getDefaultHeaders())
      .then(res => res.json())
      .catch((error) => reject(error))
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
  if (type.includes('Mord/' || 'Dråp/')) type = 'Mord'
  if (type.includes('Misshandel,  grov')) type = 'Grov misshandel'
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
    case 'Dråp': return '☠️'
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
    case 'Detonation': return '💥'
    case 'Fjällräddning': return '⛰️'
    case 'Trafikbrott': return '⛔'
    case 'Trafikkontroll': return '✋'
    case 'Sedlighetsbrott': return '🍆'
    case 'Sammanfattning': return 'book, document?'
    case 'Mord': return '☠️'
    case 'Våldtäkt': return '🙅'
    case 'Grov misshandel': return '🔨'
    case 'Sjukdom/olycksfall': return '⛑️'
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

export function findDistrict (input: string): string {
  let location = ''
  // eslint-disable-next-line
  if (SV_DISTRICTS.find(obj => obj.name === input)) location = input; console.log('MATCH FOUND,', location)
  return location
}

export function findCrimeType (input: string): string {
  let type = ''
  // eslint-disable-next-line
  if (crimeType.find(type => type === input)) type = input; console.log('MATCH FOUND,', type)
  return type
}

export const typeObj = {
  Alkohollag: 'Alkohollag',
  Anhållen: 'Anhållen',
  Arbetsplatsolycka: 'Arbetsplatsolycka',
  Bedrägeri: 'Bedrägeri',
  Bostadsinbrott: 'Bostadsinbrott',
  Brand: 'Brand',
  Brott: 'Brott',
  Brottinärarelation: 'Brott i nära relation',
  Brottsplatsundersökning: 'Brottsplatsundersökning',
  Dråp: 'Dråp',
  Efterlyst: 'Efterlyst',
  Eldningsförbud: 'Eldningsförbud',
  Envarsgripande: 'Envarsgripande',
  Fickstölderochbagagestölder: 'Fickstölder och bagagestölder',
  FylleriLOB: 'Fylleri/LOB',
  Kontrollperson: 'Kontroll person',
  Trafikolycka: 'Trafikolycka',
  Våldhotmottjänsteman: 'Våld/hot mot tjänsteman',
  Stöld: 'Stöld',
  Stöldinbrott: 'Stöld/inbrott',
  Rån: 'Rån',
  Trafikhinder: 'Trafikhinder',
  Ordningslagen: 'Ordningslagen',
  Polisinsatskommendering: 'Polisinsats/kommendering',
  Bråk: 'Bråk',
  Larm: 'Larm',
  Vapenlagen: 'Vapenlagen',
  Skottlossning: 'Skottlossning',
  Misshandel: 'Misshandel',
  Knivlagen: 'Knivlagen',
  Narkotikabrott: 'Narkotikabrott',
  Farligtföremål: 'Farligt föremål',
  Olagahot: 'Olaga hot',
  Räddningsinsats: 'Räddningsinsats',
  Skadegörelse: 'Skadegörelse',
  Rattfylleri: 'Rattfylleri',
  Missbrukavurkund: 'Missbruk av urkund',
  Detonation: 'Detonation',
  Fjällräddning: 'Fjällräddning',
  Trafikbrott: 'Trafikbrott',
  Trafikkontroll: 'Trafikkontroll',
  Sederlighetsbrott: 'Sederlighetsbrott',
  Sammanfattning: 'Sammanfattning',
  Mord: 'Mord',
  Våldtäkt: 'Våldtäkt'
}

// Object.keys(typeObj).forEach(key => {
//   let input = 'Alkohollag'
//   if (typeObj[key] === input) console.log(input)
// })

export const crimeType = [
  'Alkohollag',
  'Anhållen',
  'Arbetsplatsolycka',
  'Bedrägeri',
  'Bostadsinbrott',
  'Brand',
  'Brott',
  'Brott i nära relation',
  'Brottsplatsundersökning',
  'Dråp',
  'Efterlyst',
  'Eldningsförbud',
  'Envarsgripande',
  'Fickstölder och bagagestölder',
  'Fylleri/LOB',
  'Kontroll person',
  'Trafikolycka',
  'Våld/hot mot tjänsteman',
  'Stöld',
  'Stöld/inbrott',
  'Rån',
  'Trafikhinder',
  'Ordningslagen',
  'Polisinsats/kommendering',
  'Bråk',
  'Larm',
  'Vapenlagen',
  'Skottlossning',
  'Misshandel',
  'Knivlagen',
  'Narkotikabrott',
  'Farligt föremål',
  'Olaga hot',
  'Räddningsinsats',
  'Skadegörelse',
  'Rattfylleri',
  'Missbruk av urkund',
  'Detonation',
  'Fjällräddning',
  'Trafikbrott',
  'Trafikkontroll',
  'Sederlighetsbrott',
  'Sammanfattning',
  'Mord',
  'Våldtäkt'
]
