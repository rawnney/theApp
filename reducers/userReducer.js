// @flow
let defaultState = {
  user: {}
}

export default (state: Object = defaultState, action: Object = {}) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user
    case 'UPDATE_LOCATION':
      return action.location
    default: return state
  }
}
