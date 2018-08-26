// @flow
import {WEATHER_API_KEY} from '../consts/ApiKeys'
import {NO_COORDS} from '../consts/Coordinates'
import {getUserDegreeUnit} from './UserInfo'
import moment from './Moment'

export let getWeather = (position: Object): Promise <Object> => {
  return new Promise((resolve, reject) => {
    let unit = getUserDegreeUnit()
    let {latitude, longitude} = position
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&APPID=` + WEATHER_API_KEY)
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

export let setSysWeatherData = (sys: Object): Object => {
  let {sunrise, sunset} = sys
  sunrise = moment.unix(sunrise).format('HH.MM')
  sunset = moment.unix(sunset).format('HH.MM')
  let unixTime = {sunrise, sunset}
  return unixTime
}

export let dayOrNight = (sys: Object): string => {
  let {sunrise, sunset} = sys
  let hours = moment().format('HH')
  let isDayTime = hours > sunrise && hours < sunset
  switch (true) {
    case isDayTime: return 'day'
    case !isDayTime: return 'night'
    default: return ''
  }
}

export let getWeatherText = (weather: Object): string => {
  let text = weather.weather[0].main
  switch (text) {
    case 'Clear': return 'weather_condition_clear'
    case 'Clouds': return 'weather_condition_clouds'
    case 'Drizzle': return 'weather_condition_drizzle'
    case 'Rain': return 'weather_condition_rain'
    case 'Snow': return 'weather_condition_snow'
    case 'Mist': return 'weather_condition_mist'
    case 'Thunderstorm': return 'weather_condition_thunderstrom'
    default: return ''
  }
}

export let getWeatherIcon = (weather: Object): string => {
  let condition = weather.weather[0].main
  let sys = weather.sys
  switch (true) {
    case dayOrNight(sys) === 'day': {
      switch (condition) {
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
    case dayOrNight(sys) === 'night': {
      switch (condition) {
        case 'Clear': return '🌚' // '☀️'
        case 'Clouds': return '🌚' // '☁️'
        case 'Drizzle': return '🌚' // '🌧️'
        case 'Rain': return '🌚' // '🌧️'
        case 'Snow': return '🌚' // '🌨️'
        case 'Mist': return '🌚' // '☁️'
        case 'Thunderstorm': return '🌚' // '⛈️'
        default: return '🌚'
      }
    }
    default: return '☁️'
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
    {name: 'highTemp', valid: highTemp, value: 'weather_tip_superhot'},
    {name: 'lowTemp', valid: lowTemp, value: 'weather_tip_sweater'},
    {name: 'highWind', valid: highWind, value: 'weather_tip_sail'},
    {name: 'humid', valid: humid, value: 'weather_tip_moist'},
    {name: 'highTemp', valid: highTemp, value: 'weather_tip_catch_wave'},
    {name: 'default', valid: true, value: 'weather_tip_stay_rad'}
  ]
}
