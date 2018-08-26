// @flow
import {isEmulator} from './CommonFunctions'
import {STATIC_COORDS, NO_COORDS} from '../consts/Coordinates'

export let getPosition = (): Promise <Object> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(pos => {
      let position = pos.coords
      if (isEmulator()) position = STATIC_COORDS
      if (position === undefined) reject(new Error(NO_COORDS))
      resolve(position)
    })
  })
}
