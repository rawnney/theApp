// @flow
import {fraction} from './CommonFunctions'
import {weatherApiCall} from './ApiHandler'
import {WEATHER_API_KEY} from './Const'

export let getPosition = (): Object => {
  navigator.geolocation.getCurrentPosition(pos => {
    return pos.coords
  })
}
