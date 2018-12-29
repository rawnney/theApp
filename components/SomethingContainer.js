// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {primaryColor, secondaryColor, primaryTextColor, secondaryTextColor, warningColor} from '../libs/ColorThemeHelper'
import TheButton from './TheButton'

type Props = {}
type State = {
  shimmer: boolean,
  colorArr: Array<*>
}

let interval

export default class SomethingContainer extends Component <Props, State> {
  static routeName = 'SomethingContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('Something'))
  state = {shimmer: false, colorArr: []}

  componentDidMount () {
    if (primaryColor() !== undefined) {
      this.setState({
        colorArr: [primaryColor(), secondaryColor(), primaryTextColor(), secondaryTextColor(), warningColor()]
      })
    }
  }

  componentWillUnmount () {
    if (interval) clearInterval(interval)
  }

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <TheButton onPress={this.doSomething} text={'Shimmer'} style={styles.button} withBorder />}
    </View>
  }

  doSomething = () => {}
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    position: 'absolute',
    bottom: 0
  }
})
