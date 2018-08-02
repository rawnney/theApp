// @flow
export let getPosition = (): Promise <Object> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(pos => {
      let position = pos.coords
      if (position === undefined) reject(new Error('No position'))
      resolve(position)
    })
  })
}
