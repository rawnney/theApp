// @flow

export let goTo = (navigation: Object, routeName: string): Object => {
  return navigation.navigate(routeName)
}
