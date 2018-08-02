// @flow
import {WEATHER_API_KEY} from './Const'

export let weatherApiCall = (position: Object, fixedLocation?: boolean): Object => {
  let {latitude, longitude} = position
  if (fixedLocation) { latitude = 59.334591; longitude = 18.063240 }
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=` + WEATHER_API_KEY)
    .then(res => res.json())
    .then(json => { return json })
}
