// @flow
import {WEATHER_API_KEY} from './Const'
import {getPosition} from './WeatherHelper'

export let weatherApiCall = async (): * => {
  let {lat, lng} = await getPosition()
  // let {lat, lng} = position
  // console.log(lat, lng)
  // let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=25&lon=25&APPID=816aaa003cc41606d4a82aeafd203f97`)
  let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=` + WEATHER_API_KEY)
  console.log(res)
  // return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=` + WEATHER_API_KEY)
  let json = await res.json()
  console.log(json)
  // .then(res => res.json())
  // .finally(data => {
  //   console.log('ApiHandler', data)
    // return data
  // })
  return json
  // .catch(error => console.warn(error))
}
