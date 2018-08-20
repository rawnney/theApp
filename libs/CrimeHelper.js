// @flow
import {NO_COORDS} from '../consts/Coordinates'
import {brottsplatskartanNearBy} from '../consts/ApiUrls'

export let getCrimes = (position: Object, fixedCoords?: Object, forceLocation?: string): Promise <Object> => {
  return new Promise((resolve, reject) => {
    let {latitude, longitude} = position
    if (fixedCoords) { latitude = fixedCoords.lat; longitude = fixedCoords.lng }
    fetch(forceLocation || brottsplatskartanNearBy(latitude, longitude))
      .then(res => res.json())
      .then(json => {
        if (json === undefined) reject(new Error(NO_COORDS))
        // console.log('Updating crimes...')
        resolve(json)
      })
  })
}

export function getCrimeIcon (type: *): string {
  if (type.includes('Trafikolycka')) type = 'Trafikolycka'
  if (type.includes('Larm')) type = 'Larm'
  if (type.includes('Skottlossning')) type = 'Skottlossning'
  if (type.includes('inbrott')) type = 'Bostadsinbrott'
  if (type.includes('Rån')) type = 'Rån'
  if (type.includes('Farligt föremål')) type = 'Farligt föremål'
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
    default: return '👮️‍'
  }
}
