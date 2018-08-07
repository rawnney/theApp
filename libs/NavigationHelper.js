// @flow

export let goTo = (navigation: Object, routeName: string, props?: *): Object => {
  return navigation.navigate(routeName, props)
}
