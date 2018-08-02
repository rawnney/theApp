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

export let getWeatherTips = (weather: Object): string => {
  let tipsArray = []
  let goodTips = goodTipsArray()
  let tipName = getTipName(weather)
  tipsArray.push(goodTips.find(obj => obj.name === tipName).value)
  let randomize = Math.floor(Math.random() * tipsArray.length)
  let tip = tipsArray[randomize]
  return tip
}

let getTipName = (weather: Object) => {
  let {temp, humidity} = weather.main
  let {speed} = weather.wind
  switch (true) {
    case temp > '25': return 'highTemp'
    case temp < '16': return 'lowTemp'
    case speed > '6': return 'highWind'
    case humidity > '80': return 'humid'
    default: return 'default'
  }
}

let goodTipsArray = () => {
  return [
    {name: 'highTemp', value: '...superhot outside today! 🔥'},
    {name: 'lowTemp', value: 'Don\'t forget the sweater! ⛄️'},
    {name: 'highWind', value: 'Time to go sailing? ⛵️'},
    {name: 'humid', value: 'So moist... 💦 '},
    {name: 'default', value: 'Stay rad! 🤙'}
  ]
}
