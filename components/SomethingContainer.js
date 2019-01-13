// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {primaryColor} from '../libs/ColorThemeHelper'
import TheButton from './TheButton'

type Props = {}
type State = {
}

export default class SomethingContainer extends Component <Props, State> {
  static routeName = 'SomethingContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('general_something'))

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <TheButton onPress={this.doSomething} text='Shimmer' />
    </View>
  }

  doSomething = () => {}
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
