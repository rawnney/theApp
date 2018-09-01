// @flow
import {NO_COORDS, SV_DISTRICTS} from '../consts/Coordinates'
import {ApiBrottsplatskartanNearBy, ApiBrottplatskartanWithParams} from '../consts/ApiUrls'
import {getDefaultHeaders} from './ApiHelper'
import ct from '../consts/CrimeType'

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
  if (type.includes(ct.trafikolycka)) type = ct.trafikolycka
  if (type.includes(ct.larm)) type = ct.larm
  if (type.includes(ct.skottlossning)) type = ct.skottlossning
  if (type.includes(ct.inbrott)) type = ct.bostadsinbrott
  if (type.includes(ct.rån)) type = ct.rån
  if (type.includes(ct.farligt_föremål)) type = ct.farligt_föremål
  if (type.includes(ct.mord_alt || ct.dråp_alt)) type = ct.mord
  if (type.includes(ct.misshandel && ct.grov)) type = ct.grov_misshandel
  if (type.includes(ct.trafikolycka && ct.vilt)) type = ct.vilt_olycka
  switch (type) {
    case ct.alkohollag: return '🍺'
    case ct.anhållen: return '👮'
    case ct.arbetsplatsolycka: return '👷'
    case ct.bedrägeri: return '💸'
    case ct.bostadsinbrott: return '🏠'
    case ct.brand: return '🔥'
    case ct.brott: return '👮️‍'
    case ct.brott_i_nära_relation: return '👫'
    case ct.brottsplatsundersökning: return '🕵'
    case ct.dråp: return '☠️'
    case ct.efterlyst: return '🏃‍'
    case ct.eldningsförbud: return '🚫'
    case ct.envarsgripande: return '👨‍👩‍👦‍👦'
    case ct.fickstölder_och_bagagestölder: return '💰'
    case ct.fylleri_LOB: return '🍸'
    case ct.kontroll_person_fordon: return '🚗'
    case ct.trafikolycka: return '💥'
    case ct.våld_hot_mot_tjänsteman: return '💂'
    case ct.stöld: return '💰'
    case ct.stöld_inbrott: return '💰'
    case ct.rån: return '💰'
    case ct.trafikhinder: return '🚧'
    case ct.ordningslagen: return '☯️'
    case ct.polisinsats_kommendering: return '🚓'
    case ct.bråk: return '💢'
    case ct.larm: return '🔔'
    case ct.vapenlagen: return '🔫'
    case ct.skottlossning: return '🔫'
    case ct.misshandel: return '👊'
    case ct.knivlagen: return '🔪'
    case ct.narkotikabrott: return '💊'
    case ct.farligt_föremål: return '💣'
    case ct.olaga_hot: return '🤬'
    case ct.räddningsinsats: return '🙏'
    case ct.skadegörelse: return '👎'
    case ct.rattfylleri: return '🍷'
    case ct.missbruk_av_urkund: return '📝'
    case ct.detonation: return '💥'
    case ct.fjällräddning: return '⛰️'
    case ct.trafikbrott: return '⛔'
    case ct.trafikkontroll: return '✋'
    case ct.sedlighetsbrott: return '🍆'
    case ct.mord: return '☠️'
    case ct.våldtäkt: return '🙅'
    case ct.grov_misshandel: return '🔨'
    case ct.sjukdom_olycksfall: return '⛑️'
    case ct.vilt_olycka: return '🙈'
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
  Object.keys(ct).forEach(key => {
    if (ct[key] === input) {
      type = input
      // eslint-disable-next-line
    console.log('MATCH FOUND,', type)
    }
  })
  return type
}
