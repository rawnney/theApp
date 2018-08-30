// @flow
import {WEATHER_API_KEY} from './ApiKeys'

export let ApiBrottsplatskartanNearBy = (latitude: string, longitude: string) => `https://brottsplatskartan.se/api/eventsNearby?lat=${latitude}&lng=${longitude}`
export let ApiBrottplatskartanLocation = (location: string) => `https://brottsplatskartan.se/api/events/?location=${location}`
export let ApiOpenWeatherMap = (latitude: string, longitude: string, unit: string) => `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&APPID=` + WEATHER_API_KEY
