// @flow
export let getPosition = (): Object => {
  navigator.geolocation.getCurrentPosition(pos => {
    return pos.coords
  })
}
