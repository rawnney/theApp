// @flow
import {getUserDegreeUnit, hasImperialUnit} from './UserInfo'
import {ApiOpenWeatherMap} from '../consts/ApiUrls'
import * as Weather from '../consts/Weather'
import moment from './Moment'

export let getWeather = (position: Object): Promise <Object> => {
  return new Promise((resolve, reject) => {
    let unit = getUserDegreeUnit()
    let {latitude, longitude} = position
    fetch(ApiOpenWeatherMap(latitude, longitude, unit))
      .then(res => res.json())
      .catch((error) => { return reject(error) })
      .then(json => resolve(json))
  })
}

export let getWindDirection = (deg: number): string => {
  switch (true) {
    case deg >= Weather.DEG_N_337: return 'N'
    case deg >= Weather.DEG_NW_292: return 'N/W'
    case deg >= Weather.DEG_W_247: return 'W'
    case deg >= Weather.DEG_SW_202: return 'S/W'
    case deg >= Weather.DEG_S_157: return 'S'
    case deg >= Weather.DEG_SE_112: return 'S/E'
    case deg >= Weather.DEG_E_67: return 'E'
    case deg >= Weather.DEG_NE_22: return 'N/E'
    case deg >= Weather.DEG_N_0: return 'N'
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
    case isDayTime: return Weather.DAY
    case !isDayTime: return Weather.NIGHT
    default: return ''
  }
}

export let getWeatherText = (weather: Object): string => {
  let text = weather.weather[0].main
  switch (text) {
    case Weather.CLEAR: return 'weather_condition_clear'
    case Weather.CLOUDS: return 'weather_condition_clouds'
    case Weather.DRIZZLE: return 'weather_condition_drizzle'
    case Weather.RAIN: return 'weather_condition_rain'
    case Weather.SNOW: return 'weather_condition_snow'
    case Weather.MIST: return 'weather_condition_mist'
    case Weather.FOG: return 'weather_condition_fog'
    case Weather.THUNDERSTORM: return 'weather_condition_thunderstrom'
    default: return ''
  }
}

export let getWeatherIcon = (weather: Object): string => {
  let condition = weather.weather[0].main
  let sys = weather.sys
  switch (true) {
    case dayOrNight(sys) === 'day': {
      switch (condition) {
        case Weather.CLEAR: return '☀️'
        case Weather.CLOUDS: return '☁️'
        case Weather.DRIZZLE: return '🌧️'
        case Weather.RAIN: return '🌧️'
        case Weather.SNOW: return '🌨️'
        case Weather.MIST: return '☁️'
        case Weather.FOG: return '☁️'
        case Weather.THUNDERSTORM: return '⛈️'
        default: return '⛅'
      }
    }
    case dayOrNight(sys) === 'night': {
      switch (condition) {
        case Weather.CLEAR: return '🌚' // '☀️'
        case Weather.CLOUDS: return '🌚' // '☁️'
        case Weather.DRIZZLE: return '🌚' // '🌧️'
        case Weather.RAIN: return '🌚' // '🌧️'
        case Weather.SNOW: return '🌚' // '🌨️'
        case Weather.MIST: return '🌚' // '☁️'
        case Weather.FOG: return '🌚' // '☁️'
        case Weather.THUNDERSTORM: return '🌚' // '⛈️'
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
  let isImperial = hasImperialUnit()
  let {temp, humidity} = weather.main
  let {speed} = weather.wind
  let condition = weather.weather[0].main

  let isHighTemp = temp > (isImperial ? '85' : '25')
  let iLowTemp = temp < (isImperial ? '50' : '16')
  let isHighWind = speed > '5'
  let isHumid = humidity > '80'
  let isFog = condition === (Weather.FOG || Weather.MIST)
  let isRain = condition === Weather.RAIN

  return [
    {name: Weather.SUPERHOT, valid: isHighTemp, value: 'weather_tip_superhot'},
    {name: Weather.SWEATER, valid: iLowTemp, value: 'weather_tip_sweater'},
    {name: Weather.SAIL, valid: isHighWind, value: 'weather_tip_sail'},
    {name: Weather.HUMID, valid: isHumid, value: 'weather_tip_moist'},
    {name: Weather.SURFING, valid: isHighTemp, value: 'weather_tip_catch_wave'},
    {name: Weather.FOG, valid: isFog, value: 'weather_tip_fog'},
    {name: Weather.RAIN, valid: isRain, value: 'weather_tip_rain'},
    {name: 'default', valid: true, value: 'weather_tip_stay_rad'}
  ]
}
