// @flow
import {fraction} from './CommonFunctions'
import {weatherApiCall} from './ApiHandler'
import {WEATHER_API_KEY} from './Const'

// export let getWeatherData = (position: Object): Object => {
  // return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&APPID=` + WEATHER_API_KEY)
  // .then(res => res.json())
  // .finally(data => {
  //   console.log('ApiHandler', data)
  //   return data
  // })
// }

// const request = async () => {
//   const response = await fetch('https://api.com/values/1')
//   const json = await response.json()
//   console.log(json)
// }
//
// request()

export let getPosition = (): * => {
  return navigator.geolocation.getCurrentPosition(pos => {
    let lat = fraction(pos.coords.latitude)
    let lng = fraction(pos.coords.longitude)
    let position = {lat, lng}
    console.log(position)
    return position
  })
}

export let getWeatherData = (position: Object): Promise<Object> => {
  return new Promise((resolve, reject) => {
    let intervalID = setInterval(() => {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&APPID=` + WEATHER_API_KEY)
        .then(res => res.json())
        .then(res => {
          clearInterval(intervalID)
          console.log(res)
          resolve(res)
        })
        .catch(err => {
          if (err.status === 404) return
          reject(err)
        })
    }, 5000)
    setTimeout(() => { clearInterval(intervalID); reject(new Error('TimeoutError')) }, 10000)
  })
}
//
//
// new Promise((resolve, reject) => {
//   console.log('Initial')
//   resolve()
// })
// .then(() => {
// throw new Error('Something failed')
//
// console.log('Do this')
// })
// .catch(() => {
// console.log('Do that')
// })
// .then(() => {
// console.log('Do this, no matter what happened before')
// })
