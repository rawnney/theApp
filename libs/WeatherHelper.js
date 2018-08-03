// @flow
import {WEATHER_API_KEY} from './Const'

export let getWeather = (position: Object, fixedLat?: string, fixedLng?: string): Promise <Object> => {
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

export let getWeatherTips = (weather: Object): string => {
  let tipsArray = goodTipsArray(weather)
  let validArray = tipsArray.filter(obj => obj.valid)
  let randomize = Math.floor(Math.random() * validArray.length)
  let tip = validArray[randomize]
  return tip.value
}

let goodTipsArray = (weather: Object) => {
  let {temp, humidity} = weather.main
  let {speed} = weather.wind
  let highTemp = temp > '25'
  let lowTemp = temp < '16'
  let highWind = speed > '5'
  let humid = humidity > '80'
  return [
    {name: 'highTemp', valid: highTemp, value: '...superhot outside today! 🔥'},
    {name: 'lowTemp', valid: lowTemp, value: 'Don\'t forget the sweater! ⛄️'},
    {name: 'highWind', valid: highWind, value: 'Time to go sailing? ⛵️'},
    {name: 'humid', valid: humid, value: 'So moist... 💦 '},
    {name: 'default', valid: true, value: 'Stay rad! 🤙'}
  ]
}
