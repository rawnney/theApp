// @flow
import {WEATHER_API_KEY} from './Const'

export let getWeather = (position: Object, fixedLat?, fixedLng?): Promise <Object> => {
  return new Promise((resolve, reject) => {
    let {latitude, longitude} = position
    if (fixedLat && fixedLng) { latitude = fixedLat; longitude = fixedLng }
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=` + WEATHER_API_KEY)
      .then(res => res.json())
      .then(json => {
        if (json === undefined) reject(new Error('No position'))
        resolve(json)
      })
  })
}
