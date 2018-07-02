// @flow
let defaultState = {
  user: {}
}

export default (state: Object = defaultState, action: Object = {}) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user
    default:
      return state
  }
}
