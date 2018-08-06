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
        resolve(json)
      })
  })
}
