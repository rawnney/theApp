// @flow
import {WEATHER_API_KEY} from '../consts/ApiKeys'
import {NO_COORDS} from '../consts/Coordinates'

export let getWeather = (position: Object, fixedPos?: Object): Promise <Object> => {
  return new Promise((resolve, reject) => {
    let {latitude, longitude} = position
    if (fixedPos) { latitude = fixedPos.lat; longitude = fixedPos.lng }
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=` + WEATHER_API_KEY)
      .then(res => res.json())
      .then(json => {
        if (json === undefined) reject(new Error(NO_COORDS))
        resolve(json)
      })
  })
}

export let getWindDirection = (deg: number): string => {
  switch (true) {
    case deg >= 337.5: return 'N'
    case deg >= 292.5: return 'N/W'
    case deg >= 247.5: return 'W'
    case deg >= 202.5: return 'S/W'
    case deg >= 157.5: return 'S'
    case deg >= 112.5: return 'S/E'
    case deg >= 67.5: return 'E'
    case deg >= 22.5: return 'N/E'
    case deg >= 0: return 'N'
    default: return ''
  }
}

export let getWeatherIcon = (weatherCondition: string): string => {
  switch (weatherCondition) {
    case 'Clear': return '☀️'
    case 'Clouds': return '☁️'
    case 'Drizzle': return '🌧️'
    case 'Rain': return '🌧️'
    case 'Snow': return '🌨️'
    case 'Mist': return '☁️'
    case 'Thunderstorm': return '⛈️'
    default: return '⛅'
  }
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
