// @flow

let defaultState = {
  position: {
    lat: null,
    lng: null
  }
}

export default (state: Object = defaultState, action: Object) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return action.location
    default:
      return state
  }
}
