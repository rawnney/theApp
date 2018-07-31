// @flow
import {fraction} from './CommonFunctions'
import {weatherApiCall} from './ApiHandler'

// export let getWeatherData = async (): Object => {
//   let pos = await getPosition()
//   console.log('pos done')
//   let weather = await weatherApiCall(pos)
//   console.log('weather', weather)
//   return weather
//   // getPosition().then(position => {
//   //   weatherApiCall(getPosition())
//   // })
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
    return {lat, lng}
    // console.log('getWeatherdata:', position)
    // return position
  })
}
